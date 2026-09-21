"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./liquid-image.module.css";

// How fast the smear catches up with the pointer, and how far it lags behind
// at most. Matches the liquid glass cursor's easing so the two read as one
// effect: the lens pulls the colour along with it.
const EASE = 0.16;
const MAX_DRAG = 16;

// The still card image with a smeared copy of itself on top, revealed in a
// soft circle around the pointer.  The filter it uses is rendered once per
// page by <LiquidSmearFilter />.
//
// The pointer is tracked on the enclosing [data-smear-surface] (the whole
// card) rather than on this element: the card stacks an overlay and its text
// above the image, and those are siblings, so events there never reach us.
export function LiquidImage({ src, sizes }: { src: string; sizes: string }) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const surface = el.closest<HTMLElement>("[data-smear-surface]") ?? el;
    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    let frame: number | null = null;
    let pointing = false;

    const render = () => {
      frame = null;
      eased.x += (target.x - eased.x) * EASE;
      eased.y += (target.y - eased.y) * EASE;

      // Whatever distance the smear is still behind the pointer becomes the
      // direction the colour is dragged in.
      const dx = Math.max(-MAX_DRAG, Math.min(MAX_DRAG, (target.x - eased.x) * 0.9));
      const dy = Math.max(-MAX_DRAG, Math.min(MAX_DRAG, (target.y - eased.y) * 0.9));

      el.style.setProperty("--mx", `${eased.x}px`);
      el.style.setProperty("--my", `${eased.y}px`);
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

      // Start the smear where the pointer entered instead of sliding it in
      // from wherever it was left last time.
      if (!pointing) {
        pointing = true;
        eased.x = target.x;
        eased.y = target.y;
        el.dataset.pointing = "true";
      }
      schedule();
    };

    const clear = () => {
      pointing = false;
      el.dataset.pointing = "false";
    };

    surface.addEventListener("pointermove", track);
    surface.addEventListener("pointerleave", clear);
    surface.addEventListener("pointercancel", clear);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      surface.removeEventListener("pointermove", track);
      surface.removeEventListener("pointerleave", clear);
      surface.removeEventListener("pointercancel", clear);
    };
  }, []);

  return (
    <div ref={wrap} className={styles.wrap}>
      <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
      <div className={styles.smear} aria-hidden="true">
        <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}

// One filter for every card: soft noise pushes the pixels around, which is
// what turns the copy into running paint.
export function LiquidSmearFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="absolute">
      <filter id="liquid-smear" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.005 0.011" numOctaves={2} seed={7} result="noise" />
        <feGaussianBlur in="noise" stdDeviation="6" result="soft" />
        <feDisplacementMap in="SourceGraphic" in2="soft" scale={90} xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
