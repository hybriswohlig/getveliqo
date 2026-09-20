"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Surface = "dark" | "light";

type CursorPosition = {
  x: number;
  y: number;
};

const INTERACTIVE_SELECTOR = "a, button, input, select, textarea, [role='button']";

function getSurface(target: EventTarget | null): Surface | null {
  if (!(target instanceof Element)) {
    return null;
  }

  const value = target.closest<HTMLElement>("[data-liquid-glass-surface]")?.dataset.liquidGlassSurface;

  return value === "dark" || value === "light" ? value : null;
}

function isInteractive(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR));
}

export function LiquidGlassCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const enabledRef = useRef(false);
  const visibleRef = useRef(false);
  const targetPositionRef = useRef<CursorPosition>({ x: -100, y: -100 });
  const lensPositionRef = useRef<CursorPosition>({ x: -100, y: -100 });
  const [position, setPosition] = useState<CursorPosition>({ x: -100, y: -100 });
  const [surface, setSurface] = useState<Surface>("dark");
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const cancelFrame = () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const hide = () => {
      cancelFrame();
      visibleRef.current = false;
      setVisible(false);
    };

    const updateEligibility = () => {
      enabledRef.current = finePointer.matches && !reducedMotion.matches;

      if (!enabledRef.current) {
        hide();
      }
    };

    const render = () => {
      frameRef.current = null;

      const target = targetPositionRef.current;
      const lens = lensPositionRef.current;
      lens.x += (target.x - lens.x) * 0.16;
      lens.y += (target.y - lens.y) * 0.16;

      const root = rootRef.current;
      if (root) {
        root.style.setProperty("--liquid-glass-ring-x", `${target.x}px`);
        root.style.setProperty("--liquid-glass-ring-y", `${target.y}px`);
        root.style.setProperty("--liquid-glass-lens-x", `${lens.x}px`);
        root.style.setProperty("--liquid-glass-lens-y", `${lens.y}px`);
      }

      if (Math.hypot(target.x - lens.x, target.y - lens.y) > 0.25) {
        frameRef.current = window.requestAnimationFrame(render);
      }
    };

    const scheduleRender = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!enabledRef.current) {
        return;
      }

      const nextSurface = getSurface(event.target);
      if (!nextSurface) {
        hide();
        return;
      }

      const nextPosition = { x: event.clientX, y: event.clientY };
      targetPositionRef.current = nextPosition;

      if (!visibleRef.current) {
        visibleRef.current = true;
        lensPositionRef.current = nextPosition;
        setPosition(nextPosition);
        setSurface(nextSurface);
        setInteractive(isInteractive(event.target));
        setVisible(true);
        return;
      }

      setSurface((currentSurface) => (currentSurface === nextSurface ? currentSurface : nextSurface));
      setInteractive((currentInteractive) => {
        const nextInteractive = isInteractive(event.target);
        return currentInteractive === nextInteractive ? currentInteractive : nextInteractive;
      });
      scheduleRender();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hide();
      }
    };

    updateEligibility();
    finePointer.addEventListener("change", updateEligibility);
    reducedMotion.addEventListener("change", updateEligibility);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelFrame();
      finePointer.removeEventListener("change", updateEligibility);
      reducedMotion.removeEventListener("change", updateEligibility);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (!visible) {
    return null;
  }

  const cursorStyle = {
    "--liquid-glass-ring-x": `${position.x}px`,
    "--liquid-glass-ring-y": `${position.y}px`,
    "--liquid-glass-lens-x": `${position.x}px`,
    "--liquid-glass-lens-y": `${position.y}px`,
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      data-liquid-glass-cursor
      data-surface={surface}
      data-interactive={interactive || undefined}
      aria-hidden="true"
      className="liquid-glass-cursor"
      style={cursorStyle}
    >
      <span data-liquid-glass-cursor-lens className="liquid-glass-cursor__lens" />
      <span data-liquid-glass-cursor-ring className="liquid-glass-cursor__ring" />
    </div>
  );
}
