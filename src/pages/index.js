import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import AniTag from "../components/animalia_components/AniTag";
import AniButtonPrimary from "../components/animalia_components/AniButtonPrimary";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageSections from "../components/HomepageSections";
import HomepagePrincipals from "../components/HomepagePrincipals";
import HomepageCTA from "../components/HomepageCTA";
import AniButtonTertiary from "../components/animalia_components/AniButtonTertiary";
import { faChevronRight, faBook } from "@fortawesome/free-solid-svg-icons";
import ScrollFadeIn from "../components/animations/ScrollFadeIn";
import { motion } from "framer-motion";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.hero__banner)}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__container}>
          <div className={styles.hero__content}>
            <motion.div
              className={styles.hero__title__section}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            >
              <AniTag text="Release 2.3.2" variant="release" />
              <h1 className={styles.hero__title}>
                Um sistema aberto que{" "}
                <span className={styles.hero__title__highlight}>
                  conecta pessoas, times e produtos
                </span>{" "}
                em toda a{" "}
                <span className={styles.hero__title__brand}>TOTVS</span>
              </h1>
            </motion.div>
            <motion.div
              className={styles.hero__bottom}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
            >
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
            </motion.div>
          </div>
        </div>
        <motion.div
          className={styles.hero__video__wrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          <div className={styles.hero__video__container}>
            <video
              className={styles.hero__video}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video/hero-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
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
        <HomepageCTA />
        <HomepagePrincipals />
        <ScrollFadeIn className={styles.learnMoreContainer}>
          <AniButtonTertiary
            to="/docs/about/intro"
            label="Saiba mais sobre o Animalia DS"
          />
        </ScrollFadeIn>
      </main>
    </Layout>
  );
}
