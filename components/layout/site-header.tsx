import Link from "next/link";
import { LogoMark } from "@/components/brand/logo-mark";
import { mainNav } from "@/content/home";
import { MenuButton } from "./menu-button";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="VELYQO – Startseite">
        <LogoMark tone="tile" size={36} className={styles.mark} />
        <span className={styles.wordmark}>VELYQO</span>
      </Link>

      <nav className={styles.nav} aria-label="Hauptnavigation">
        <ul className={styles.navList}>
          {mainNav.map((link) => (
            <li key={link.label}>
              <a className={styles.navLink} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.right}>
        {/* TODO: English version. Only German exists for now. */}
        <p className={styles.lang}>
          <span aria-current="true">DE</span> <span className={styles.langDivider}>|</span>{" "}
          <span>EN</span>
        </p>
        <MenuButton links={mainNav} />
      </div>
    </header>
  );
}
