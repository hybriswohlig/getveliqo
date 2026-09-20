import { SiteHeader } from "@/components/layout/site-header";
import { ArrowRightIcon } from "@/components/ui/arrow-right-icon";
import { hero } from "@/content/home";
import { HeroScene } from "./hero-scene";
import styles from "./hero.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* On desktop the hero pins inside this range while the scene builds up. */}
      <div className={styles.scrollRange} data-scroll-range>
        <div className={styles.sticky}>
          <div className={styles.frame}>
            <div className={styles.stage}>
              <span className={`${styles.gridLine} ${styles.gridTop}`} aria-hidden="true" />
              <span className={`${styles.gridLine} ${styles.gridBottom}`} aria-hidden="true" />
              <span className={`${styles.gridLine} ${styles.gridLeft}`} aria-hidden="true" />
              <span className={`${styles.gridLine} ${styles.gridRight}`} aria-hidden="true" />

              <SiteHeader />

              <div className={styles.text}>
                <div className={styles.indicator} aria-hidden="true">
                  <span className={styles.indicatorLine} />
                </div>
                <div className={styles.copy}>
                  <h1 id="hero-title" className={styles.title}>
                    {hero.title.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h1>
                  <p className={styles.lead}>{hero.lead}</p>
                  <a href={hero.cta.href} className={styles.cta}>
                    {hero.cta.label}
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>

              <p className={styles.stamp}>{hero.stamp}</p>

              <div className={styles.visual}>
                <HeroScene />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
