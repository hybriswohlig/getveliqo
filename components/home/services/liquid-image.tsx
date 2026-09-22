"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createFluid, type Fluid } from "./fluid";
import styles from "./liquid-image.module.css";

// The card's artwork, with a fluid simulation of it laid on top. Moving the
// pointer pushes into the paint, which swirls, pulls into strands and mixes;
// taking the pointer away lets it settle back into the picture it came from.
//
// The still <Image> stays in the markup underneath: it is what is shown
// before the first hover, on touch, under reduced motion, and on anything
// that cannot give us the render targets the solver needs.
//
// The pointer is tracked on the enclosing [data-smear-surface] (the whole
// card) rather than on this element, because the card stacks its tint overlay
// and its text above the image as siblings, so events there never reach us.
export function LiquidImage({ src, sizes }: { src: string; sizes: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const surface = el.closest<HTMLElement>("[data-smear-surface]") ?? el;
    const pointer = { x: 0.5, y: 0.5 };
    let fluid: Fluid | null = null;
    let unavailable = false;
    let frame: number | null = null;
    let last = 0;
    let held = false;

    const sizeCanvas = () => {
      const rect = el.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));
      if (cv.width === width && cv.height === height) return false;
      cv.width = width;
      cv.height = height;
      return true;
    };

    const stop = () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      frame = null;
      el.dataset.live = "false";
    };

    const loop = (now: number) => {
      frame = window.requestAnimationFrame(loop);
      const dt = last ? now - last : 16;
      last = now;
      fluid?.step(dt, now);
      // Once the paint is back to the artwork the canvas has nothing left to
      // show, so it fades out and the loop stops until the next hover.
      if (fluid?.settled()) stop();
    };

    const start = () => {
      if (frame !== null) return false;
      last = 0;
      frame = window.requestAnimationFrame(loop);
      return true;
    };

    // The solver needs the decoded artwork, which is the <img> next/image
    // already put in the page, so nothing is downloaded twice.
    const ensure = () => {
      if (fluid || unavailable) return fluid;
      const img = el.querySelector("img");
      if (!img || !img.complete || !img.naturalWidth) return null;
      sizeCanvas();
      fluid = createFluid(cv, img);
      if (!fluid) unavailable = true;
      return fluid;
    };

    const track = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const active = ensure();
      if (!active) return;

      const rect = el.getBoundingClientRect();
      const x = (rect.width ? (event.clientX - rect.left) / rect.width : 0.5);
      // The simulation's y runs the other way from the page's.
      const y = 1 - (rect.height ? (event.clientY - rect.top) / rect.height : 0.5);

      if (!held) {
        held = true;
        el.dataset.live = "true";
        // Only wipe the tank when it is actually at rest; coming back to a
        // card that is still settling should carry on from where it is.
        if (start()) active.reset();
        active.hold();
        pointer.x = x;
        pointer.y = y;
      }

      active.push(x, y, x - pointer.x, y - pointer.y);
      pointer.x = x;
      pointer.y = y;
    };

    const leave = () => {
      if (!held) return;
      held = false;
      fluid?.release();
    };

    const lost = (event: Event) => {
      event.preventDefault();
      stop();
      fluid = null;
      unavailable = true;
    };

    const observer = new ResizeObserver(() => {
      if (sizeCanvas()) fluid?.resize();
    });
    observer.observe(el);

    surface.addEventListener("pointermove", track);
    surface.addEventListener("pointerleave", leave);
    surface.addEventListener("pointercancel", leave);
    cv.addEventListener("webglcontextlost", lost);

    return () => {
      stop();
      observer.disconnect();
      surface.removeEventListener("pointermove", track);
      surface.removeEventListener("pointerleave", leave);
      surface.removeEventListener("pointercancel", leave);
      cv.removeEventListener("webglcontextlost", lost);
      fluid?.destroy();
      fluid = null;
    };
  }, []);

  return (
    <div ref={wrap} className={styles.wrap}>
      <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
      <canvas ref={canvas} className={styles.canvas} aria-hidden="true" />
    </div>
  );
}
