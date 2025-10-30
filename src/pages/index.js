import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import AniTag from "../components/animalia_components/AniTag";
import AniButtonPrimary from "../components/animalia_components/AniButtonPrimary";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageSections from "../components/HomepageSections";
import AniButtonTertiary from "../components/animalia_components/AniButtonTertiary";
import { faChevronRight, faBook } from "@fortawesome/free-solid-svg-icons";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.hero__banner)}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__container}>
          <div className={styles.hero__content}>
            <div className={styles.hero__title__section}>
              <AniTag text="Release 2.3.2" variant="release" />
              <h1 className={styles.hero__title}>
                Um sistema aberto que{" "}
                <span className={styles.hero__title__highlight}>
                  conecta pessoas, times e produtos
                </span>{" "}
                em toda a{" "}
                <span className={styles.hero__title__brand}>TOTVS</span>
              </h1>
            </div>
            <div className={styles.hero__bottom}>
              <p className={styles.hero__description}>
                O Animalia DS é o design system open source da TOTVS, feito para
                unificar experiências, acelerar entregas e escalar a
                consistência em ambientes de negócios complexos.
              </p>
              <div className={styles.hero__buttons}>
                <AniButtonPrimary
                  to="/docs/about/getting-started"
                  label="Começando"
                  icon={faChevronRight}
                />
                <AniButtonTertiary
                  to="/docs/about/intro"
                  label="Conheça o Animalia"
                  icon={faBook}
                  iconPosition="left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hero__preview__wrapper}>
          <div className={styles.hero__preview}>
            <div className={styles.hero__preview__background}></div>
            <div className={styles.hero__preview__card}>
              <div className={styles.menu__preview}>
                <div className={styles.menu__header}>
                  <div className={styles.menu__logo}></div>
                  <div className={styles.menu__search}>
                    <span className={styles.search__icon}>🔍</span>
                    <span className={styles.search__text}>Buscar</span>
                  </div>
                </div>
                <div className={styles.menu__items}>
                  <div
                    className={`${styles.menu__item} ${styles.menu__item__active}`}
                  >
                    <span>📋</span> Label
                  </div>
                  <div className={styles.menu__item}>
                    <span>📋</span> Label
                    <span className={styles.menu__arrow}>▼</span>
                  </div>
                  <div className={styles.menu__item}>
                    <span>📋</span> Label
                    <span className={styles.menu__arrow}>▼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bem vindo ao ${siteConfig.title}`}
      description="Design system open source da TOTVS"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSections />
        <div className={styles.learnMoreContainer}>
          <AniButtonTertiary
            to="/docs/about/intro"
            label="Saiba mais sobre o Animalia DS"
          />
        </div>
      </main>
    </Layout>
  );
}
