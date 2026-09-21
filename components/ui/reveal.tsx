"use client";

import { motion, type HTMLMotionProps } from "motion/react";

// Text and blocks rise into place the first time they are scrolled to, which
// is what gives the page its sense of being assembled as you come down it.
// It happens once per element: scrolling back up and down again does not
// replay it, because a page that keeps re-animating is tiring to read.
//
// The element itself is animated rather than a wrapper around it, so passing
// `as` keeps the markup the layout expects — the service cards stay real
// <li> children of their list, and their sibling selectors keep working.
//
// A reduced-motion preference is honoured in globals.css, not here: the hook
// that reports it only answers after the first render, and by then motion has
// already written the hidden state onto the element.

// Out fast, settling slow: the block is legible almost immediately and only
// the last few pixels are gentle.
const EASE = [0.22, 0.61, 0.36, 1] as const;
const DURATION = 0.62;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  distance?: number;
  as?: "div" | "li";
};

export function Reveal({ children, delay = 0, distance = 28, as = "div", ...rest }: RevealProps) {
  const Tag = (as === "li" ? motion.li : motion.div) as typeof motion.div;

  return (
    <Tag
      data-reveal=""
      {...rest}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      // Slightly before the element is fully in view, so it has finished
      // arriving by the time it is being read.
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: DURATION, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

// Without scripting nothing can ever reveal the text, so it must not start
// hidden. Rendered once per page.
export function RevealFallback() {
  return (
    <noscript>
      <style>
        {"[data-reveal]{opacity:1!important;transform:none!important}"}
      </style>
    </noscript>
  );
}
