import React from "react";
import styles from "./HomepageCTA.module.css";
import AniButtonSecondary from "./animalia_components/AniButtonSecondary";

export default function HomepageCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Junte-se a quem cria o futuro do design
          </h2>
          <AniButtonSecondary
            to="/docs/about/getting-started"
            label="Faça parte"
          />
        </div>
      </div>
    </section>
  );
}
