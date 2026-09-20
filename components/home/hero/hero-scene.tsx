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
      initial={entrance}
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

// One step per Figma animation frame. Each gets the same slice of the scroll
// range, with a short rest after it so the visitor sees the steps one by one.
const STEP = 1;
const REST = 0.25;
const stepAt = (index: number) => index * (STEP + REST);

// A callout draws itself: dot, connector, then the text (Figma "start 3" / "6"
// / the last final frame).
function callout(n: number, index: number): AnimationSequence {
  const at = stepAt(index);
  return [
    [`[data-anim="dot-${n}"]`, { scale: 1 }, { duration: 0.25, at, ease: easeOut }],
    [`[data-anim="line-${n}"]`, { clipPath: "inset(0 0 0 0%)" }, { duration: 0.45, at: at + 0.15, ease: easeOut }],
    [`[data-anim="label-${n}"]`, { opacity: 1, y: 0 }, { duration: 0.4, at: at + 0.45, ease: easeOut }],
  ];
}

// The layers travel out of the laptop rather than fading in, so there is no
// opacity track here: they are simply hidden behind the laptop until they clear
// its screen.
function enter(ids: string[], index: number): AnimationSequence {
  const at = stepAt(index);
  return ids.map((id) => [`[data-anim="${id}"]`, { x: "0%", y: "0%" }, { duration: STEP, at, ease: easeOut }]);
}

// The build-up, step by step, following the Figma frames "velyqo-hero-animation
// start 3" through the last "final". The laptop opening (frames start 0–2) is
// the video and runs before this timeline.
const buildUp: AnimationSequence = [
  ...callout(1, 0), // start 3: // 01 Webdesign
  ...enter(["google", "chatgpt"], 1), // start 4–5: both panels rise together
  ...callout(2, 2), // start 6: // 02 SEO, GEO & PR
  ...enter(["phone"], 3), // start 7 → final 8: phone from the right
  ...enter(["instagram"], 4), // final: the Instagram card
  ...callout(3, 5), // final: // 03 E-Commerce
];

// Matches the width at which the hero pins and the callouts appear (see CSS).
const SCRUBBED = "(min-width: 1280px)";

// How the pinned scroll range is divided: the laptop opens over the first
// stretch, the intro then hands over to the live layers, and the rest drives
// the build-up.
const VIDEO_PHASE = 0.32;
const HANDOVER = 0.06;

// Every frame of this one is a keyframe so it can be scrubbed; the smaller
// file is the one that plays by itself below 1024px.
const SCRUB_VIDEO = "/assets/home/hero/laptop-open-scrub.mp4";
const PLAY_VIDEO = "/assets/home/hero/laptop-open.mp4";

const clamp = (n: number) => Math.min(1, Math.max(0, n));

export function HeroScene() {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    const scene = scope.current;
    const intro = scene?.querySelector<HTMLElement>("[data-intro]");
    if (!video || !scene || !intro) return;

    const scrubbed = window.matchMedia(SCRUBBED).matches;
    // Always paused to begin with: nothing animates on its own.
    const timeline = animate(buildUp, { autoplay: false });
    video.src = scrubbed ? SCRUB_VIDEO : PLAY_VIDEO;

    if (scrubbed) {
      // Scroll drives everything: first the laptop opening, then the build-up.
      const range = scene.closest("[data-scroll-range]");
      const apply = (progress: number) => {
        const duration = video.duration || 3.75;
        const opening = clamp(progress / VIDEO_PHASE) * duration;
        if (Math.abs(video.currentTime - opening) > 0.02) video.currentTime = opening;
        intro.style.opacity = String(1 - clamp((progress - VIDEO_PHASE) / HANDOVER));
        const build = (progress - VIDEO_PHASE - HANDOVER) / (1 - VIDEO_PHASE - HANDOVER);
        timeline.time = clamp(build) * timeline.duration;
      };
      const stopScroll = scroll(apply, {
        target: range ?? undefined,
        offset: ["start start", "end end"],
      });
      // A fresh timeline only holds the steps it has been scrubbed to. After a
      // remount (fast refresh, route change) apply the current scroll position
      // right away instead of waiting for the next scroll event — otherwise the
      // steps that were already past would sit at their starting values.
      if (range) {
        const box = range.getBoundingClientRect();
        const distance = box.height - window.innerHeight;
        apply(distance > 0 ? clamp(-box.top / distance) : 0);
      }
      return () => {
        stopScroll();
        timeline.stop();
      };
    }

    // Below 1024px the hero isn't pinned, so the video plays and the build-up
    // follows it on a timer.
    let introDone = false;
    const finishIntro = () => {
      if (introDone) return;
      introDone = true;
      video.pause();
      animate(intro, { opacity: 0 }, { duration: 0.5 });
      // Nothing paces it here, so run the steps a bit quicker than on scroll.
      timeline.speed = 1.6;
      timeline.play();
    };
    const ready = Promise.race([
      Promise.all([...scene.querySelectorAll("img")].map((img) => img.decode().catch(() => undefined))),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ]);
    const onEnded = () => ready.then(finishIntro);

    // Playing before the source has loaded aborts the request, so wait for data.
    const startPlayback = () => {
      video.play().catch(onEnded);
    };
    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onEnded);
    if (video.readyState >= 2) startPlayback();
    else video.addEventListener("loadeddata", startPlayback, { once: true });
    const fallback = setTimeout(() => {
      if (video.currentTime === 0) onEnded();
    }, 6000);

    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onEnded);
      video.removeEventListener("loadeddata", startPlayback);
      clearTimeout(fallback);
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
          <video ref={videoRef} className={styles.introVideo} muted playsInline preload="auto" />
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
