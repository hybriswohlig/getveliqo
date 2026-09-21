// A small stable-fluids solver on the GPU, after Jos Stam's "Stable Fluids"
// and the usual WebGL formulation of it: advect the velocity field, confine
// its vorticity so the swirls survive, then project it back to being
// divergence free with a few Jacobi iterations for pressure.
//
// What the field carries is not the artwork itself but a field of offsets.
// Pushing the paint directly through the solver looks right for a moment and
// then washes out, because every advection step resamples what the last one
// produced and the detail diffuses away for good. Carrying offsets instead
// means every frame is drawn from the untouched artwork, so the paint folds
// and braids at full sharpness however long it is stirred.
//
// It also makes letting go exact: the offsets decay to zero, and zero offset
// is the original image, pixel for pixel.

const SIM_RESOLUTION = 144;
const PRESSURE_ITERATIONS = 18;
const PRESSURE_DECAY = 0.8;
const CURL = 28;
const VELOCITY_DISSIPATION = 0.9;
const SPLAT_RADIUS = 0.2;
const SPLAT_FORCE = 2400;
// How fast the offsets sag back to zero, per second. Held, the flow outruns
// the sag and the warp builds up; released, the sag wins and the card is back
// to its original within about a second.
const SAG_HELD = 2.0;
const SAG_RELEASED = 5.5;
// The resolution the offsets are kept at. They are a smooth field, so they
// need far less than the artwork does.
const WARP_RESOLUTION = 320;
// The furthest the paint may ever be pulled from where it belongs, as a
// fraction of the card. Without a ceiling a long stir stretches the artwork
// into streaks and the card stops being the picture it is meant to be.
const MAX_WARP = 0.085;

const VERTEX = `#version 300 es
in vec2 aPosition;
out vec2 vUv;
out vec2 vL;
out vec2 vR;
out vec2 vT;
out vec2 vB;
uniform vec2 uTexelSize;
void main () {
  vUv = aPosition * 0.5 + 0.5;
  vL = vUv - vec2(uTexelSize.x, 0.0);
  vR = vUv + vec2(uTexelSize.x, 0.0);
  vT = vUv + vec2(0.0, uTexelSize.y);
  vB = vUv - vec2(0.0, uTexelSize.y);
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const HEAD = `#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
in vec2 vL;
in vec2 vR;
in vec2 vT;
in vec2 vB;
out vec4 fragColor;
`;

// Draws the artwork into a texture the size of the canvas, cropped the way
// `object-fit: cover` would, so the simulation and the still <img> underneath
// line up exactly.
const CLEAR = `${HEAD}
uniform sampler2D uTexture;
uniform float uValue;
void main () {
  fragColor = uValue * texture(uTexture, vUv);
}`;

const SPLAT = `${HEAD}
uniform sampler2D uTarget;
uniform float uAspectRatio;
uniform vec3 uColor;
uniform vec2 uPoint;
uniform float uRadius;
void main () {
  vec2 p = vUv - uPoint;
  p.x *= uAspectRatio;
  vec3 splat = exp(-dot(p, p) / uRadius) * uColor;
  vec3 base = texture(uTarget, vUv).xyz;
  fragColor = vec4(base + splat, 1.0);
}`;

const ADVECT_VELOCITY = `${HEAD}
uniform sampler2D uVelocity;
uniform vec2 uTexelSize;
uniform float uDt;
uniform float uDissipation;
void main () {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uTexelSize;
  fragColor = texture(uVelocity, coord) / (1.0 + uDissipation * uDt);
}`;

// The offsets ride along on the flow, gather more of it as they go, and sag
// back towards zero all the while.
const ADVECT_WARP = `${HEAD}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uTexelSize;
uniform vec2 uVelocityTexelSize;
uniform float uDt;
uniform float uSag;
uniform float uMaxWarp;
void main () {
  vec2 velocity = texture(uVelocity, vUv).xy;
  vec2 coord = vUv - uDt * velocity * uTexelSize;
  vec2 carried = texture(uSource, coord).xy;
  vec2 gathered = (carried + velocity * uVelocityTexelSize * uDt) / (1.0 + uSag * uDt);
  float reach = length(gathered);
  if (reach > uMaxWarp) gathered *= uMaxWarp / reach;
  fragColor = vec4(gathered, 0.0, 1.0);
}`;

// The only pass that touches the artwork: read it back through the offsets.
// Zero offset is the untouched image.
const DISPLAY = `${HEAD}
uniform sampler2D uImage;
uniform sampler2D uWarp;
uniform vec2 uScale;
void main () {
  vec2 uv = vUv - texture(uWarp, vUv).xy;
  fragColor = texture(uImage, (uv - 0.5) * uScale + 0.5);
}`;

const CURL_SHADER = `${HEAD}
uniform sampler2D uVelocity;
void main () {
  float l = texture(uVelocity, vL).y;
  float r = texture(uVelocity, vR).y;
  float t = texture(uVelocity, vT).x;
  float b = texture(uVelocity, vB).x;
  fragColor = vec4(0.5 * (r - l - t + b), 0.0, 0.0, 1.0);
}`;

const VORTICITY = `${HEAD}
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float uCurlStrength;
uniform float uDt;
void main () {
  float l = texture(uCurl, vL).x;
  float r = texture(uCurl, vR).x;
  float t = texture(uCurl, vT).x;
  float b = texture(uCurl, vB).x;
  float c = texture(uCurl, vUv).x;
  vec2 force = 0.5 * vec2(abs(t) - abs(b), abs(r) - abs(l));
  force /= length(force) + 0.0001;
  force *= uCurlStrength * c;
  force.y *= -1.0;
  vec2 velocity = texture(uVelocity, vUv).xy + force * uDt;
  fragColor = vec4(clamp(velocity, -1000.0, 1000.0), 0.0, 1.0);
}`;

const DIVERGENCE = `${HEAD}
uniform sampler2D uVelocity;
void main () {
  float l = texture(uVelocity, vL).x;
  float r = texture(uVelocity, vR).x;
  float t = texture(uVelocity, vT).y;
  float b = texture(uVelocity, vB).y;
  vec2 c = texture(uVelocity, vUv).xy;
  if (vL.x < 0.0) { l = -c.x; }
  if (vR.x > 1.0) { r = -c.x; }
  if (vT.y > 1.0) { t = -c.y; }
  if (vB.y < 0.0) { b = -c.y; }
  fragColor = vec4(0.5 * (r - l + t - b), 0.0, 0.0, 1.0);
}`;

const PRESSURE = `${HEAD}
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
void main () {
  float l = texture(uPressure, vL).x;
  float r = texture(uPressure, vR).x;
  float t = texture(uPressure, vT).x;
  float b = texture(uPressure, vB).x;
  float divergence = texture(uDivergence, vUv).x;
  fragColor = vec4((l + r + b + t - divergence) * 0.25, 0.0, 0.0, 1.0);
}`;

const GRADIENT_SUBTRACT = `${HEAD}
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
void main () {
  float l = texture(uPressure, vL).x;
  float r = texture(uPressure, vR).x;
  float t = texture(uPressure, vT).x;
  float b = texture(uPressure, vB).x;
  vec2 velocity = texture(uVelocity, vUv).xy - vec2(r - l, t - b);
  fragColor = vec4(velocity, 0.0, 1.0);
}`;

type Target = { fbo: WebGLFramebuffer; texture: WebGLTexture; width: number; height: number; texelSize: [number, number] };
type Double = { read: Target; write: Target; swap: () => void };

export type Fluid = {
  step: (dtMs: number, timeMs: number) => void;
  push: (x: number, y: number, dx: number, dy: number) => void;
  reset: () => void;
  release: () => void;
  hold: () => void;
  settled: () => boolean;
  resize: () => void;
  destroy: () => void;
};

export function createFluid(canvas: HTMLCanvasElement, image: HTMLImageElement): Fluid | null {
  const gl = canvas.getContext("webgl2", { alpha: true, antialias: false, depth: false, stencil: false, premultipliedAlpha: false, preserveDrawingBuffer: false });
  // Half float render targets are what the solver keeps its fields in; with
  // no support for them there is nothing to fall back to, so the card simply
  // keeps its still image.
  if (!gl || !gl.getExtension("EXT_color_buffer_float")) return null;

  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn("fluid: shader failed", gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  };

  const vertex = compile(gl.VERTEX_SHADER, VERTEX);
  if (!vertex) return null;

  const programs = new Map<string, { program: WebGLProgram; uniforms: Record<string, WebGLUniformLocation | null> }>();
  const build = (name: string, source: string) => {
    const fragment = compile(gl.FRAGMENT_SHADER, source);
    if (!fragment) return false;
    const program = gl.createProgram()!;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.bindAttribLocation(program, 0, "aPosition");
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("fluid: link failed", gl.getProgramInfoLog(program));
      return false;
    }
    const uniforms: Record<string, WebGLUniformLocation | null> = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS) as number;
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(program, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
    }
    programs.set(name, { program, uniforms });
    return true;
  };

  const built = [
    build("display", DISPLAY), build("clear", CLEAR), build("splat", SPLAT),
    build("advectVelocity", ADVECT_VELOCITY), build("advectWarp", ADVECT_WARP), build("curl", CURL_SHADER),
    build("vorticity", VORTICITY), build("divergence", DIVERGENCE), build("pressure", PRESSURE),
    build("gradient", GRADIENT_SUBTRACT),
  ];
  if (built.some((ok) => !ok)) return null;

  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  const texture = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

  const targets: Target[] = [];
  const makeTarget = (width: number, height: number, internal: number, format: number, type: number): Target => {
    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internal, width, height, 0, format, type, null);
    const fbo = gl.createFramebuffer()!;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.viewport(0, 0, width, height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    const target = { fbo, texture: tex, width, height, texelSize: [1 / width, 1 / height] as [number, number] };
    targets.push(target);
    return target;
  };
  const makeDouble = (width: number, height: number, internal: number, format: number, type: number): Double => {
    const a = makeTarget(width, height, internal, format, type);
    const b = makeTarget(width, height, internal, format, type);
    return { read: a, write: b, swap () { const t = this.read; this.read = this.write; this.write = t; } };
  };

  let warp: Double;
  let velocity: Double;
  let divergenceTarget: Target;
  let curlTarget: Target;
  let pressure: Double;
  let scale: [number, number] = [1, 1];
  let sag = SAG_HELD;
  let quiet = 0;

  const activate = (name: string) => {
    const entry = programs.get(name)!;
    gl.useProgram(entry.program);
    return entry.uniforms;
  };

  const bind = (uniforms: Record<string, WebGLUniformLocation | null>, name: string, tex: WebGLTexture, unit: number) => {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(uniforms[name] ?? null, unit);
  };

  const draw = (target: Target | null) => {
    if (target) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      gl.viewport(0, 0, target.width, target.height);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const wipe = (target: Double) => {
    const uniforms = activate("clear");
    gl.uniform2f(uniforms["uTexelSize"] ?? null, target.read.texelSize[0], target.read.texelSize[1]);
    bind(uniforms, "uTexture", target.read.texture, 0);
    gl.uniform1f(uniforms["uValue"] ?? null, 0);
    draw(target.write);
    target.swap();
  };

  const dispose = () => {
    for (const target of targets) {
      gl.deleteFramebuffer(target.fbo);
      gl.deleteTexture(target.texture);
    }
    targets.length = 0;
  };

  const allocate = () => {
    dispose();
    const width = canvas.width;
    const height = canvas.height;

    // What the display pass needs to crop the artwork the way
    // `object-fit: cover` does, so it lines up with the still <img> below.
    const canvasAspect = width / height;
    const imageAspect = (image.naturalWidth || 1) / (image.naturalHeight || 1);
    scale = imageAspect > canvasAspect ? [canvasAspect / imageAspect, 1] : [1, imageAspect / canvasAspect];

    const warpScale = Math.min(1, WARP_RESOLUTION / Math.max(width, height));
    const warpW = Math.max(2, Math.round(width * warpScale));
    const warpH = Math.max(2, Math.round(height * warpScale));
    const simScale = SIM_RESOLUTION / Math.min(width, height);
    const simW = Math.max(2, Math.round(width * simScale));
    const simH = Math.max(2, Math.round(height * simScale));

    warp = makeDouble(warpW, warpH, gl.RG16F, gl.RG, gl.HALF_FLOAT);
    velocity = makeDouble(simW, simH, gl.RG16F, gl.RG, gl.HALF_FLOAT);
    divergenceTarget = makeTarget(simW, simH, gl.R16F, gl.RED, gl.HALF_FLOAT);
    curlTarget = makeTarget(simW, simH, gl.R16F, gl.RED, gl.HALF_FLOAT);
    pressure = makeDouble(simW, simH, gl.R16F, gl.RED, gl.HALF_FLOAT);
  };

  allocate();

  const splat = (x: number, y: number, dx: number, dy: number, radius: number) => {
    const uniforms = activate("splat");
    gl.uniform2f(uniforms["uTexelSize"] ?? null, velocity.read.texelSize[0], velocity.read.texelSize[1]);
    bind(uniforms, "uTarget", velocity.read.texture, 0);
    gl.uniform1f(uniforms["uAspectRatio"] ?? null, canvas.width / canvas.height);
    gl.uniform2f(uniforms["uPoint"] ?? null, x, y);
    gl.uniform3f(uniforms["uColor"] ?? null, dx, dy, 0);
    gl.uniform1f(uniforms["uRadius"] ?? null, radius);
    draw(velocity.write);
    velocity.swap();
  };

  return {
    step (dtMs, timeMs) {
      const dt = Math.min(dtMs, 1000 / 30) / 1000;

      // A slow current keeps the paint turning over even when the pointer is
      // held still, so the card never looks frozen while it is being touched.
      if (sag === SAG_HELD) {
        const t = timeMs / 1000;
        const drift = 70 * dt;
        splat(0.5 + 0.3 * Math.cos(t * 0.53), 0.5 + 0.3 * Math.sin(t * 0.71), -Math.sin(t * 0.53) * drift, Math.cos(t * 0.71) * drift, SPLAT_RADIUS * 2.2);
        splat(0.5 + 0.34 * Math.cos(t * 0.37 + 2.4), 0.5 + 0.28 * Math.sin(t * 0.47 + 1.1), Math.sin(t * 0.37) * drift, -Math.cos(t * 0.47) * drift, SPLAT_RADIUS * 2.6);
      }

      let uniforms = activate("curl");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, velocity.read.texelSize[0], velocity.read.texelSize[1]);
      bind(uniforms, "uVelocity", velocity.read.texture, 0);
      draw(curlTarget);

      uniforms = activate("vorticity");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, velocity.read.texelSize[0], velocity.read.texelSize[1]);
      bind(uniforms, "uVelocity", velocity.read.texture, 0);
      bind(uniforms, "uCurl", curlTarget.texture, 1);
      gl.uniform1f(uniforms["uCurlStrength"] ?? null, CURL);
      gl.uniform1f(uniforms["uDt"] ?? null, dt);
      draw(velocity.write);
      velocity.swap();

      uniforms = activate("divergence");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, velocity.read.texelSize[0], velocity.read.texelSize[1]);
      bind(uniforms, "uVelocity", velocity.read.texture, 0);
      draw(divergenceTarget);

      uniforms = activate("clear");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, pressure.read.texelSize[0], pressure.read.texelSize[1]);
      bind(uniforms, "uTexture", pressure.read.texture, 0);
      gl.uniform1f(uniforms["uValue"] ?? null, PRESSURE_DECAY);
      draw(pressure.write);
      pressure.swap();

      uniforms = activate("pressure");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, pressure.read.texelSize[0], pressure.read.texelSize[1]);
      bind(uniforms, "uDivergence", divergenceTarget.texture, 0);
      for (let i = 0; i < PRESSURE_ITERATIONS; i++) {
        bind(uniforms, "uPressure", pressure.read.texture, 1);
        draw(pressure.write);
        pressure.swap();
      }

      uniforms = activate("gradient");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, velocity.read.texelSize[0], velocity.read.texelSize[1]);
      bind(uniforms, "uPressure", pressure.read.texture, 0);
      bind(uniforms, "uVelocity", velocity.read.texture, 1);
      draw(velocity.write);
      velocity.swap();

      uniforms = activate("advectVelocity");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, velocity.read.texelSize[0], velocity.read.texelSize[1]);
      bind(uniforms, "uVelocity", velocity.read.texture, 0);
      gl.uniform1f(uniforms["uDt"] ?? null, dt);
      gl.uniform1f(uniforms["uDissipation"] ?? null, VELOCITY_DISSIPATION);
      draw(velocity.write);
      velocity.swap();

      uniforms = activate("advectWarp");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, warp.read.texelSize[0], warp.read.texelSize[1]);
      gl.uniform2f(uniforms["uVelocityTexelSize"] ?? null, velocity.read.texelSize[0], velocity.read.texelSize[1]);
      bind(uniforms, "uVelocity", velocity.read.texture, 0);
      bind(uniforms, "uSource", warp.read.texture, 1);
      gl.uniform1f(uniforms["uDt"] ?? null, dt);
      gl.uniform1f(uniforms["uSag"] ?? null, sag);
      gl.uniform1f(uniforms["uMaxWarp"] ?? null, MAX_WARP);
      draw(warp.write);
      warp.swap();

      uniforms = activate("display");
      gl.uniform2f(uniforms["uTexelSize"] ?? null, warp.read.texelSize[0], warp.read.texelSize[1]);
      bind(uniforms, "uImage", texture, 0);
      bind(uniforms, "uWarp", warp.read.texture, 1);
      gl.uniform2f(uniforms["uScale"] ?? null, scale[0], scale[1]);
      draw(null);

      if (sag === SAG_RELEASED) quiet += dtMs;
    },
    push (x, y, dx, dy) {
      splat(x, y, dx * SPLAT_FORCE, dy * SPLAT_FORCE, SPLAT_RADIUS);
    },
    reset () {
      wipe(warp);
      wipe(velocity);
      quiet = 0;
    },
    hold () {
      sag = SAG_HELD;
      quiet = 0;
    },
    release () {
      sag = SAG_RELEASED;
      quiet = 0;
    },
    // Long enough for the offsets to have sagged back to nothing.
    settled: () => sag === SAG_RELEASED && quiet > 1000,
    resize: allocate,
    destroy () {
      dispose();
      gl.deleteTexture(texture);
      gl.deleteBuffer(quad);
      for (const { program } of programs.values()) gl.deleteProgram(program);
      programs.clear();
    },
  };
}
