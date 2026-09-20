"use client";

import Image from "next/image";
import { motion, scroll, useAnimate, useReducedMotion, type AnimationSequence } from "motion/react";
import { Fragment, useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { entrances, layers, pedestalBox, type Box, type Layer } from "./hero-layers";
import styles from "./hero.module.css";

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

function LayerView({ layer }: { layer: Layer }) {
  const [w, h] = layer.inner ?? [layer.box[2], layer.box[3]];

  if (layer.kind === "shadow") {
    return (
      <div className={styles.layer} style={boxStyle(layer.box)} data-layer={layer.id}>
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

  const image = (
    <div
      className={styles.layerInner}
      style={{ width: u(w), height: u(h), transform: layer.transform, opacity: layer.opacity }}
    >
      <Image
        src={layer.src}
        alt=""
        fill
        sizes={sizesFor(w)}
        loading="eager"
        style={{ objectFit: layer.fit, objectPosition: layer.position }}
      />
    </div>
  );

  const entrance = entrances[layer.id];
  if (!entrance) {
    return (
      <div className={styles.layer} style={boxStyle(layer.box)} data-layer={layer.id}>
        {image}
      </div>
    );
  }
  return (
    <motion.div
      className={styles.layer}
      style={boxStyle(layer.box)}
      data-layer={layer.id}
      data-anim={layer.id}
      initial={{ ...entrance, opacity: 0 }}
    >
      {image}
    </motion.div>
  );
}

// The pedestal fades into the background at its left and bottom edges.
const pedestalFade: CSSProperties = {
  ...boxStyle(pedestalBox),
  position: "absolute",
  backgroundImage:
    "linear-gradient(90deg, rgb(11 11 11) 0%, rgb(11 11 11 / 0) 34%, rgb(11 11 11 / 0) 88%, rgb(11 11 11 / 0.35) 100%), linear-gradient(180deg, rgb(11 11 11 / 0) 0%, rgb(11 11 11 / 0.18) 48%, rgb(11 11 11 / 0.96) 100%)",
};

// A service callout: a label, a dashed connector and a dot on the device.
// Connectors are drawn from the dot outwards.
function Callout({
  n,
  label,
  dot,
  line,
}: {
  n: number;
  label: { box: [x: number, y: number, w: number]; number: string; title: string; text: ReactNode; alignEnd?: boolean };
  dot: [x: number, y: number];
  line: { box: Box; length: number; rotate?: number };
}) {
  const [lx, ly, lw] = label.box;
  return (
    <>
      <motion.div
        className={styles.dot}
        style={{ left: u(dot[0]), top: u(dot[1]) }}
        data-anim={`dot-${n}`}
        initial={{ scale: 0 }}
      />
      <div className={styles.layer} style={boxStyle(line.box)}>
        <motion.div
          className={styles.connector}
          style={{ width: u(line.length), rotate: line.rotate ? `${line.rotate}deg` : undefined }}
          data-anim={`line-${n}`}
          initial={{ clipPath: "inset(0 0 0 100%)" }}
        />
      </div>
      <motion.div
        className={`${styles.label} ${label.alignEnd ? styles.labelEnd : ""}`}
        style={{ left: u(lx), top: u(ly), width: u(lw) }}
        data-anim={`label-${n}`}
        initial={{ opacity: 0, y: "12%" }}
      >
        <p className={styles.labelNumber}>{label.number}</p>
        <p className={styles.labelTitle}>{label.title}</p>
        <p className={styles.labelText}>{label.text}</p>
      </motion.div>
    </>
  );
}

const easeOut = [0.22, 1, 0.36, 1] as const;

function calloutSegments(n: number, at: number): AnimationSequence {
  return [
    [`[data-anim="dot-${n}"]`, { scale: 1 }, { duration: 0.3, at, ease: easeOut }],
    [`[data-anim="line-${n}"]`, { clipPath: "inset(0 0 0 0%)" }, { duration: 0.55, at: at + 0.1, ease: easeOut }],
    [`[data-anim="label-${n}"]`, { opacity: 1, y: 0 }, { duration: 0.5, at: at + 0.35, ease: easeOut }],
  ];
}

function enter(id: string, at: number, duration: number): AnimationSequence {
  const selector = `[data-anim="${id}"]`;
  return [
    [selector, { x: "0%", y: "0%" }, { duration, at, ease: easeOut }],
    [selector, { opacity: 1 }, { duration: duration * 0.45, at }],
  ];
}

// After the laptop has opened, the scene builds up in the order of the Figma
// animation-state frames. On desktop this timeline is scrubbed by scroll, so
// each step flies in as the visitor scrolls; below that it plays on a timer.
const buildUp: AnimationSequence = [
  ...calloutSegments(1, 0.35),
  ...enter("google", 1.0, 1.1),
  ...enter("chatgpt", 1.15, 1.1),
  ...calloutSegments(2, 2.05),
  ...enter("phone", 2.55, 0.95),
  ...enter("instagram", 3.2, 0.85),
  ...calloutSegments(3, 3.85),
];

const DESKTOP = "(min-width: 1024px)";

export function HeroScene() {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    const scene = scope.current;
    if (!video || !scene) return;

    const scrubbed = window.matchMedia(DESKTOP).matches;
    // Always paused to begin with: nothing animates while the video plays.
    const timeline = animate(buildUp, { autoplay: false });

    let introDone = false;
    const finishIntro = (duration: number) => {
      if (introDone) return;
      introDone = true;
      video.pause();
      animate("[data-intro]", { opacity: 0 }, { duration });
      // On a timer, the build-up starts as soon as the intro is out of the way.
      if (!scrubbed) timeline.play();
    };

    // Wait for the open-laptop layers before the video gives way to them.
    const ready = Promise.race([
      Promise.all([...scene.querySelectorAll("img")].map((img) => img.decode().catch(() => undefined))),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ]);
    const onEnded = () => ready.then(() => finishIntro(0.5));

    // If the video can't play (blocked autoplay, e.g. iOS low-power mode, or a
    // failed download), go straight to the built-up scene.
    const lastSource = video.querySelector("source:last-of-type");
    video.addEventListener("ended", onEnded);
    lastSource?.addEventListener("error", onEnded);
    video.play().catch(onEnded);
    const fallback = setTimeout(() => {
      if (video.currentTime === 0) onEnded();
    }, 4000);

    let stopScroll: VoidFunction | undefined;
    if (scrubbed) {
      const range = scene.closest("[data-scroll-range]") ?? undefined;
      stopScroll = scroll(
        (progress: number) => {
          // Scrolling never runs alongside the video: it cuts the intro short.
          if (!introDone) {
            if (progress <= 0.001) return;
            finishIntro(0.35);
          }
          timeline.time = progress * timeline.duration;
        },
        { target: range as Element | undefined, offset: ["start start", "end end"] },
      );
    }

    return () => {
      video.removeEventListener("ended", onEnded);
      lastSource?.removeEventListener("error", onEnded);
      clearTimeout(fallback);
      stopScroll?.();
      timeline.stop();
    };
  }, [animate, reducedMotion, scope]);

  return (
    <div ref={scope} className={styles.scene}>
      <div className={styles.composition} aria-hidden="true">
        {layers.map((layer) => (
          <Fragment key={layer.id}>
            <LayerView layer={layer} />
            {layer.id === "pedestal" && <div style={pedestalFade} data-layer="pedestal-fade" />}
          </Fragment>
        ))}

        {/* Laptop opening: the first frame doubles as the poster. */}
        <div className={styles.intro} data-intro>
          <Image
            src="/assets/home/hero/intro-poster.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 100vw, 146vw"
            preload
          />
          <video ref={videoRef} className={styles.introVideo} muted playsInline preload="auto">
            <source src="/assets/home/hero/laptop-open.webm" type="video/webm" />
            <source src="/assets/home/hero/laptop-open.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={`${styles.composition} ${styles.callouts}`}>
        <Callout
          n={1}
          label={{
            box: [350, 562, 230],
            number: "// 01",
            title: "Webdesign",
            alignEnd: true,
            text: (
              <>
                High-converting websites
                <br />
                that turn visitors into customers.
              </>
            ),
          }}
          dot={[686, 605]}
          line={{ box: [587, 607.5, 102, 1], length: 102 }}
        />
        <Callout
          n={2}
          label={{
            box: [501, 118, 240],
            number: "// 02",
            title: "SEO, GEO & PR",
            text: "Be visible everywhere people search and talk.",
          }}
          dot={[769.05, 233.87]}
          line={{ box: [601, 191, 167.107, 44.739], length: 172.992, rotate: 14.99 }}
        />
        <Callout
          n={3}
          label={{
            box: [1408, 580, 140],
            number: "// 03",
            title: "E-Commerce",
            text: "Turn attention into revenue.",
          }}
          dot={[1311, 713]}
          line={{ box: [1316, 658, 144, 57], length: 154.871, rotate: 158.4 }}
        />
      </div>
    </div>
  );
}
