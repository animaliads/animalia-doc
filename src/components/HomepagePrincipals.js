import React from "react";
import styles from "./HomepagePrincipals.module.css";
import AniTag from "./animalia_components/AniTag";

export default function HomepagePrincipals() {
  return (
    <section className={styles.principals}>
      <div className={styles.principals__wrapper}>
        <div className={styles.principals__header}>
          <AniTag text="Conheça o Animalia DS" variant="primary" />
          <h2 className={styles.principals__title}>
            Guiados por princípios, impulsionados por propósito
          </h2>
        </div>
        <div className={styles.principals__cards}>
          <div className={styles.principals__card}>
            <div className={styles.card__image}>
              <img
                src="/img/principals/accessible.jpg"
                alt="Acessível e Inclusivo"
              />
            </div>
            <h3 className={styles.card__title}>Acessível e Inclusivo</h3>
          </div>
          <div className={styles.principals__card}>
            <div className={styles.card__image}>
              <img src="/img/principals/collaborative.jpg" alt="Colaborativo" />
            </div>
            <h3 className={styles.card__title}>Colaborativo</h3>
          </div>
          <div className={styles.principals__card}>
            <div className={styles.card__image}>
              <img
                src="/img/principals/business.jpg"
                alt="Impulsionar Negócios"
              />
            </div>
            <h3 className={styles.card__title}>Impulsionar Negócios</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
