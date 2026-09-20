// Every number here is a coordinate in the 1536×864 Figma frame
// (velyqo-hero, node 54:4). `box` is the layer's bounding box; `inner`
// is the untransformed layer that gets rotated/skewed inside it.

export type Box = [x: number, y: number, w: number, h: number];

export type ImageLayer = {
  kind: "image";
  id: string;
  src: string;
  box: Box;
  inner?: [w: number, h: number];
  transform?: string;
  fit?: "cover" | "contain" | "fill";
  position?: string;
  opacity?: number;
};

export type ShadowLayer = {
  kind: "shadow";
  id: string;
  box: Box;
  inner?: [w: number, h: number];
  rotate?: number;
  color: string;
  blur: number;
  radius: number;
  opacity?: number;
};

export type Layer = ImageLayer | ShadowLayer;

const black = (alpha: number) => `rgb(0 0 0 / ${alpha})`;

// Soft contact shadow under the laptop, phone and panels.
function contact(
  id: string,
  box: Box,
  inner: [number, number],
  rotate: number,
  radius: number,
  opacity?: number,
): ShadowLayer {
  return { kind: "shadow", id, box, inner, rotate, color: black(0.62), blur: 10, radius, opacity };
}

export const pedestalBox: Box = [620, 520, 916, 430];

// Paint order matches the Figma layer order. The layers that animate in
// (see `entrances`) sit where the animation frames put them: the Instagram
// card starts behind the laptop, so it is painted just below it.
export const layers: Layer[] = [
  { kind: "image", id: "pedestal", src: "/assets/home/hero/pedestal.jpg", box: pedestalBox, fit: "cover", opacity: 0.88 },
  { kind: "shadow", id: "ambient-shadow", box: [700, 455, 760, 330], color: black(0.28), blur: 55, radius: 165 },
  { kind: "shadow", id: "google-shadow", box: [710.47, 185, 438.509, 308.616], inner: [420, 280], rotate: 4, color: black(0.34), blur: 17.5, radius: 28 },
  { kind: "shadow", id: "chatgpt-shadow", box: [1050, 156.88, 400.633, 285.488], inner: [380, 253.333], rotate: -5, color: black(0.34), blur: 17.5, radius: 28 },
  { kind: "shadow", id: "instagram-shadow", box: [1160, 326.7, 229.247, 247.427], inner: [210, 230], rotate: -5, color: black(0.34), blur: 17.5, radius: 26 },
  { kind: "shadow", id: "analytics-shadow", box: [1245, 658.14, 177.468, 124.583], inner: [170, 113], rotate: -4, color: black(0.32), blur: 16, radius: 24 },
  { kind: "shadow", id: "phone-shadow", box: [1130, 715.39, 227.804, 61.45], inner: [225, 42], rotate: -5, color: black(0.62), blur: 9, radius: 21 },
  {
    kind: "image",
    id: "google",
    src: "/assets/home/hero/panel-google.png",
    box: [702, 68, 458.47, 336.89],
    inner: [459.488, 306.325],
    transform: "rotate(-3.81deg) skewX(-3.81deg)",
    fit: "cover",
  },
  contact("google-edge-shadow", [1047, 84, 70.293, 255.028], [254.236, 67.235], -89.31, 29),
  {
    kind: "image",
    id: "chatgpt",
    src: "/assets/home/hero/panel-chatgpt.png",
    box: [1019, 90, 495.062, 352.37],
    inner: [495.551, 330.367],
    transform: "rotate(2.54deg) skewX(2.54deg)",
    fit: "cover",
  },
  {
    kind: "image",
    id: "rock",
    src: "/assets/home/hero/rock.png",
    box: [769, 327, 657.348, 985.422],
    inner: [963.206, 622.379],
    transform: "rotate(87.89deg) scaleY(-1)",
    fit: "cover",
  },
  contact("laptop-shadow-1", [746, 314, 491.815, 423.339], [472.588, 400.457], -2.83, 29),
  contact("laptop-shadow-2", [873, 329, 560.231, 193.395], [190.523, 559.259], 90.29, 126, 0.3),
  {
    kind: "image",
    id: "instagram",
    src: "/assets/home/hero/card-instagram.png",
    box: [1351, 234, 159, 335.6],
    inner: [162.149, 303.8],
    transform: "rotate(11.31deg) scaleY(0.98) skewX(11.31deg)",
    fit: "fill",
  },
  {
    kind: "image",
    id: "laptop",
    src: "/assets/home/hero/laptop-on-rock.png",
    box: [156, 269, 1363, 908],
    fit: "cover",
  },
  contact("laptop-shadow-3", [184.91, 679.5, 1301.863, 486.79], [471.207, 1296.281], -89.31, 126, 0.3),
  contact("laptop-shadow-4", [1130.51, 558, 277.326, 299.718], [274.703, 249.48], -83.88, 29, 0.6),
  {
    kind: "image",
    id: "phone",
    src: "/assets/home/hero/smartphone.png",
    box: [1160, 372, 252, 397],
    fit: "contain",
    position: "bottom",
  },
  contact("phone-shadow-1", [1134, 351, 113.63, 443.736], [439.072, 67.235], -83.88, 29, 0.2),
  contact("phone-shadow-2", [1146, 513, 91, 263.188], [257.848, 63.893], -83.88, 29, 0.2),
  contact("phone-shadow-3", [1322, 365, 113.63, 443.736], [439.072, 67.235], -83.88, 29, 0.4),
  contact("laptop-contact-shadow", [1173, 709, 440.187, 74.95], [439.072, 67.235], -1.01, 29, 0.8),
];

// Where each entering layer starts, as translate % of its own box so the
// offsets hold at every stage size. Derived from the animation-state frames
// ("velyqo-hero-animation final"): the panels rise from behind the laptop
// (mid-state offset −42/+187), the phone slides in from the right (+233),
// the Instagram card slides out from behind the laptop (−243/+17).
export const entrances: Record<string, { x: string; y: string }> = {
  google: { x: "-16.5%", y: "100%" },
  chatgpt: { x: "-15.3%", y: "95%" },
  phone: { x: "170%", y: "-1.8%" },
  instagram: { x: "-152.8%", y: "5.1%" },
};
