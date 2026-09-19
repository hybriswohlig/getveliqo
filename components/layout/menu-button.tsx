"use client";

import { useEffect, useId, useState } from "react";
import styles from "./site-header.module.css";

type Link = { label: string; href: string };

// Figma only shows the closed hamburger. Opening it lists the same links as
// the navbar, which is the only way to navigate below 1024px.
export function MenuButton({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.menuBar} />
        <span className={`${styles.menuBar} ${styles.menuBarShort}`} />
      </button>
      <nav id={panelId} className={styles.menuPanel} hidden={!open} aria-label="Menü">
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a className={styles.navLink} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
