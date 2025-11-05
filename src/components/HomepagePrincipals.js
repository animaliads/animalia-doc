import React from "react";
import styles from "./HomepagePrincipals.module.css";
import AniTag from "./animalia_components/AniTag";
import ScrollFadeIn from "./animations/ScrollFadeIn";
import { motion } from "framer-motion";

export default function HomepagePrincipals() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  return (
    <section className={styles.principals}>
      <div className={styles.principals__wrapper}>
        <ScrollFadeIn className={styles.principals__header} delay={0.1}>
          <AniTag text="Conheça o Animalia DS" variant="primary" />
          <h2 className={styles.principals__title}>
            Guiados por princípios, impulsionados por propósito
          </h2>
        </ScrollFadeIn>
        <motion.div
          className={styles.principals__cards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className={styles.principals__card} variants={cardVariants}>
            <div className={styles.card__image}>
              <img
                src="/img/principals/accessible.jpg"
                alt="Acessível e Inclusivo"
              />
            </div>
            <h3 className={styles.card__title}>Acessível e Inclusivo</h3>
          </motion.div>
          <motion.div className={styles.principals__card} variants={cardVariants}>
            <div className={styles.card__image}>
              <img src="/img/principals/collaborative.jpg" alt="Colaborativo" />
            </div>
            <h3 className={styles.card__title}>Colaborativo</h3>
          </motion.div>
          <motion.div className={styles.principals__card} variants={cardVariants}>
            <div className={styles.card__image}>
              <img
                src="/img/principals/business.jpg"
                alt="Impulsionar Negócios"
              />
            </div>
            <h3 className={styles.card__title}>Impulsionar Negócios</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
