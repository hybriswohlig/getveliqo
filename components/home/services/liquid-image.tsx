"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./liquid-image.module.css";

// How fast the lens catches up with the pointer, and how far the copy is
// dragged behind it at most. The easing matches the liquid glass cursor, so
// the two read as one thing: the lens pulls the colour along with it.
const EASE = 0.16;
const MAX_DRAG = 18;

// The filter's noise is animated, which costs real work on every frame, so it
// runs only while a card is actually being pointed at.
let pointed = 0;

function smearSvg() {
  // getElementById is typed as HTMLElement, but this id belongs to the filter.
  const filter = document.getElementById("liquid-smear") as SVGFilterElement | null;
  return filter?.ownerSVGElement ?? null;
}

function setWaterRunning(running: boolean) {
  const svg = smearSvg();
  if (!svg) return;
  pointed = Math.max(0, pointed + (running ? 1 : -1));
  if (pointed > 0) svg.unpauseAnimations();
  else svg.pauseAnimations();
}

// The still card image with a round lens over it that follows the pointer and
// shows the same image displaced by moving noise.
//
// The pointer is tracked on the enclosing [data-smear-surface] (the whole
// card) rather than on this element: the card stacks its tint overlay and its
// text above the image, and those are siblings, so events there never reach
// us.
export function LiquidImage({ src, sizes }: { src: string; sizes: string }) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    smearSvg()?.pauseAnimations();

    const surface = el.closest<HTMLElement>("[data-smear-surface]") ?? el;
    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    let frame: number | null = null;
    let pointing = false;

    // The copy is laid out at the card's size, so the lens needs to know it.
    const measure = () => {
      const box = el.getBoundingClientRect();
      el.style.setProperty("--w", `${box.width}px`);
      el.style.setProperty("--h", `${box.height}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);

    const render = () => {
      frame = null;
      eased.x += (target.x - eased.x) * EASE;
      eased.y += (target.y - eased.y) * EASE;

      // Whatever distance the lens is still behind the pointer becomes the
      // direction the colour is dragged in.
      const dx = Math.max(-MAX_DRAG, Math.min(MAX_DRAG, (target.x - eased.x) * 0.9));
      const dy = Math.max(-MAX_DRAG, Math.min(MAX_DRAG, (target.y - eased.y) * 0.9));

      el.style.setProperty("--mx", `${eased.x.toFixed(2)}px`);
      el.style.setProperty("--my", `${eased.y.toFixed(2)}px`);
      el.style.setProperty("--dx", `${dx.toFixed(2)}px`);
      el.style.setProperty("--dy", `${dy.toFixed(2)}px`);

      if (Math.hypot(target.x - eased.x, target.y - eased.y) > 0.25) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(render);
    };

    const track = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const box = el.getBoundingClientRect();
      target.x = event.clientX - box.left;
      target.y = event.clientY - box.top;

      // Start where the pointer entered instead of sliding the lens in from
      // wherever it was left last time.
      if (!pointing) {
        pointing = true;
        eased.x = target.x;
        eased.y = target.y;
        el.dataset.pointing = "true";
        setWaterRunning(true);
      }
      schedule();
    };

    const clear = () => {
      if (!pointing) return;
      pointing = false;
      el.dataset.pointing = "false";
      setWaterRunning(false);
    };

    surface.addEventListener("pointermove", track);
    surface.addEventListener("pointerleave", clear);
    surface.addEventListener("pointercancel", clear);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      observer.disconnect();
      clear();
      surface.removeEventListener("pointermove", track);
      surface.removeEventListener("pointerleave", clear);
      surface.removeEventListener("pointercancel", clear);
    };
  }, []);

  return (
    <div ref={wrap} className={styles.wrap}>
      <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
      <div className={styles.lens} aria-hidden="true">
        <div className={styles.inner}>
          <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
        </div>
      </div>
    </div>
  );
}

// One filter for every card. The noise field is animated on two cycles that
// do not divide into each other, so it keeps churning without ever settling
// into a loop the eye can follow: that is what makes the colour look like it
// is mixing rather than sliding.
export function LiquidSmearFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="absolute">
      <filter id="liquid-smear" x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.013" numOctaves={2} seed={7} result="noise">
          <animate
            attributeName="baseFrequency"
            dur="17s"
            values="0.006 0.013;0.011 0.007;0.007 0.012;0.006 0.013"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feGaussianBlur in="noise" stdDeviation="5" result="soft" />
        <feDisplacementMap in="SourceGraphic" in2="soft" scale={75} xChannelSelector="R" yChannelSelector="G">
          <animate attributeName="scale" dur="11s" values="75;96;68;75" repeatCount="indefinite" />
        </feDisplacementMap>
      </filter>
    </svg>
  );
}
