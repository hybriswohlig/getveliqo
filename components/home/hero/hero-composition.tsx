import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./hero.module.css";

// Every number below is a coordinate in the 1536×864 Figma frame
// (velyqo-hero, node 54:4). `box` is the layer's bounding box; `inner`
// is the untransformed layer that gets rotated/skewed inside it.
type Box = [x: number, y: number, w: number, h: number];

const u = (n: number) => `calc(var(--u) * ${n})`;

function boxStyle([x, y, w, h]: Box): CSSProperties {
  return { left: u(x), top: u(y), width: u(w), height: u(h) };
}

// Width of a layer relative to the viewport, for `sizes`.
function sizesFor(width: number) {
  const desktop = ((width / 1536) * 100).toFixed(1);
  const mobile = ((width / 1056) * 100).toFixed(1);
  return `(min-width: 1024px) ${desktop}vw, ${mobile}vw`;
}

type ImageLayer = {
  kind: "image";
  name: string;
  src: string;
  box: Box;
  inner?: [w: number, h: number];
  transform?: string;
  fit?: CSSProperties["objectFit"];
  position?: string;
  opacity?: number;
  preload?: boolean;
};

type ShadowLayer = {
  kind: "shadow";
  box: Box;
  inner?: [w: number, h: number];
  rotate?: number;
  color: string;
  blur: number;
  radius: number;
  opacity?: number;
};

type Layer = ImageLayer | ShadowLayer;

const black = (alpha: number) => `rgb(0 0 0 / ${alpha})`;

// Soft contact shadow under the laptop, phone and panels.
const contact = (box: Box, inner: [number, number], rotate: number, radius: number, opacity?: number): ShadowLayer => ({
  kind: "shadow",
  box,
  inner,
  rotate,
  color: black(0.62),
  blur: 10,
  radius,
  opacity,
});

// Paint order matches the Figma layer order.
const layers: Layer[] = [
  { kind: "image", name: "stone pedestal", src: "/assets/home/hero/pedestal.jpg", box: [620, 520, 916, 430], fit: "cover", opacity: 0.88 },
  { kind: "shadow", box: [700, 455, 760, 330], color: black(0.28), blur: 55, radius: 165 },
  { kind: "shadow", box: [710.47, 185, 438.509, 308.616], inner: [420, 280], rotate: 4, color: black(0.34), blur: 17.5, radius: 28 },
  { kind: "shadow", box: [1050, 156.88, 400.633, 285.488], inner: [380, 253.333], rotate: -5, color: black(0.34), blur: 17.5, radius: 28 },
  { kind: "shadow", box: [1160, 326.7, 229.247, 247.427], inner: [210, 230], rotate: -5, color: black(0.34), blur: 17.5, radius: 26 },
  { kind: "shadow", box: [1245, 658.14, 177.468, 124.583], inner: [170, 113], rotate: -4, color: black(0.32), blur: 16, radius: 24 },
  { kind: "shadow", box: [1130, 715.39, 227.804, 61.45], inner: [225, 42], rotate: -5, color: black(0.62), blur: 9, radius: 21 },
  {
    kind: "image",
    name: "Google search result",
    src: "/assets/home/hero/panel-google.png",
    box: [702, 68, 458.47, 336.89],
    inner: [459.488, 306.325],
    transform: "rotate(-3.81deg) skewX(-3.81deg)",
    fit: "cover",
  },
  contact([1047, 84, 70.293, 255.028], [254.236, 67.235], -89.31, 29),
  {
    kind: "image",
    name: "ChatGPT answer",
    src: "/assets/home/hero/panel-chatgpt.png",
    box: [1019, 90, 495.062, 352.37],
    inner: [495.551, 330.367],
    transform: "rotate(2.54deg) skewX(2.54deg)",
    fit: "cover",
  },
  {
    kind: "image",
    name: "rock",
    src: "/assets/home/hero/rock.png",
    box: [769, 327, 657.348, 985.422],
    inner: [963.206, 622.379],
    transform: "rotate(87.89deg) scaleY(-1)",
    fit: "cover",
  },
  contact([746, 314, 491.815, 423.339], [472.588, 400.457], -2.83, 29),
  contact([873, 329, 560.231, 193.395], [190.523, 559.259], 90.29, 126, 0.3),
  {
    kind: "image",
    name: "laptop on a rock",
    src: "/assets/home/hero/laptop-on-rock.png",
    box: [156, 269, 1363, 908],
    fit: "cover",
    preload: true,
  },
  contact([184.91, 679.5, 1301.863, 486.79], [471.207, 1296.281], -89.31, 126, 0.3),
  contact([1130.51, 558, 277.326, 299.718], [274.703, 249.48], -83.88, 29, 0.6),
  {
    kind: "image",
    name: "Instagram post",
    src: "/assets/home/hero/card-instagram.png",
    box: [1351, 234, 159, 335.6],
    inner: [162.149, 303.8],
    transform: "rotate(11.31deg) scaleY(0.98) skewX(11.31deg)",
    fit: "fill",
  },
  {
    kind: "image",
    name: "smartphone",
    src: "/assets/home/hero/smartphone.png",
    box: [1160, 372, 252, 397],
    fit: "contain",
    position: "bottom",
  },
  contact([1134, 351, 113.63, 443.736], [439.072, 67.235], -83.88, 29, 0.2),
  contact([1146, 513, 91, 263.188], [257.848, 63.893], -83.88, 29, 0.2),
  contact([1322, 365, 113.63, 443.736], [439.072, 67.235], -83.88, 29, 0.4),
  contact([1173, 709, 440.187, 74.95], [439.072, 67.235], -1.01, 29, 0.8),
];

function renderLayer(layer: Layer, index: number) {
  if (layer.kind === "shadow") {
    const [w, h] = layer.inner ?? [layer.box[2], layer.box[3]];
    return (
      <div key={index} className={styles.layer} style={boxStyle(layer.box)}>
        <div
          className={styles.shadow}
          style={{
            width: u(w),
            height: u(h),
            background: layer.color,
            filter: `blur(${u(layer.blur)})`,
            borderRadius: u(layer.radius),
            opacity: layer.opacity,
            rotate: layer.rotate ? `${layer.rotate}deg` : undefined,
          }}
        />
      </div>
    );
  }

  const [w, h] = layer.inner ?? [layer.box[2], layer.box[3]];
  return (
    <div key={index} className={styles.layer} style={boxStyle(layer.box)}>
      <div
        className={styles.layerInner}
        style={{ width: u(w), height: u(h), transform: layer.transform, opacity: layer.opacity }}
      >
        <Image
          src={layer.src}
          alt=""
          fill
          sizes={sizesFor(w)}
          preload={layer.preload}
          loading={layer.preload ? undefined : "eager"}
          style={{ objectFit: layer.fit, objectPosition: layer.position }}
        />
      </div>
    </div>
  );
}

// The pedestal fades into the background at its left and bottom edges.
const pedestalFade: CSSProperties = {
  ...boxStyle([620, 520, 916, 430]),
  position: "absolute",
  backgroundImage:
    "linear-gradient(90deg, rgb(11 11 11) 0%, rgb(11 11 11 / 0) 34%, rgb(11 11 11 / 0) 88%, rgb(11 11 11 / 0.35) 100%), linear-gradient(180deg, rgb(11 11 11 / 0) 0%, rgb(11 11 11 / 0.18) 48%, rgb(11 11 11 / 0.96) 100%)",
};

function Connector({ box, length, rotate }: { box: Box; length: number; rotate?: number }) {
  return (
    <div className={styles.layer} style={boxStyle(box)}>
      <div
        className={styles.connector}
        style={{ width: u(length), rotate: rotate ? `${rotate}deg` : undefined }}
      />
    </div>
  );
}

function Dot({ x, y }: { x: number; y: number }) {
  return <div className={styles.dot} style={{ left: u(x), top: u(y) }} />;
}

export function HeroComposition() {
  const [pedestal, ...rest] = layers;
  return (
    <div className={styles.composition} aria-hidden="true">
      {renderLayer(pedestal, 0)}
      <div style={pedestalFade} />
      {rest.map((layer, i) => renderLayer(layer, i + 1))}
    </div>
  );
}

// Service callouts pointing at the devices. Figma numbers them in this order.
export function HeroCallouts() {
  return (
    <div className={`${styles.composition} ${styles.callouts}`}>
      <div className={`${styles.label}`} style={{ left: u(1408), top: u(580), width: u(140) }}>
        <p className={styles.labelNumber}>{"// 03"}</p>
        <p className={styles.labelTitle}>E-Commerce</p>
        <p className={styles.labelText}>Turn attention into revenue.</p>
      </div>
      <Dot x={1311} y={713} />
      <Connector box={[1316, 658, 144, 57]} length={154.871} rotate={158.4} />

      <Dot x={769.05} y={233.87} />
      <Connector box={[601, 191, 167.107, 44.739]} length={172.992} rotate={14.99} />
      <div className={styles.label} style={{ left: u(501), top: u(118), width: u(240) }}>
        <p className={styles.labelNumber}>{"// 02"}</p>
        <p className={styles.labelTitle}>SEO, GEO &amp; PR</p>
        <p className={styles.labelText}>Be visible everywhere people search and talk.</p>
      </div>

      <Connector box={[587, 607.5, 102, 1]} length={102} />
      <Dot x={686} y={605} />
      <div className={`${styles.label} ${styles.labelEnd}`} style={{ left: u(350), top: u(562), width: u(230) }}>
        <p className={styles.labelNumber}>{"// 01"}</p>
        <p className={styles.labelTitle}>Webdesign</p>
        <p className={styles.labelText}>
          High-converting websites
          <br />
          that turn visitors into customers.
        </p>
      </div>
    </div>
  );
}
