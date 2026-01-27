import React from "react";
import styles from "./HomepagePrincipals.module.css";
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
          <motion.div
            className={styles.principals__card}
            variants={cardVariants}
          >
            <div className={styles.card__imageContainer}>
              <img
                src="/img/principals/accessible.png"
                alt="Acessível e Inclusivo"
                className={styles.card__image}
              />
              <div className={styles.card__gradient} />
            </div>
            <div className={styles.card__content}>
              <div className={styles.card__iconContainer}>
                <i className="an an-person-arms-spread"></i>
              </div>
              <div className={styles.card__bottom}>
                <div className={styles.card__textContent}>
                  <h3 className={styles.card__title}>Acessível e Inclusivo</h3>
                  <p className={styles.card__description}>
                    Oferecemos componentes que atendem aos padrões de
                    acessibilidade da WCAG e da Lei Brasileira de Inclusão.
                  </p>
                </div>
                <a href="#" className={styles.card__link}>
                  Saiba mais
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.principals__card}
            variants={cardVariants}
          >
            <div className={styles.card__imageContainer}>
              <img
                src="/img/principals/collaborative.png"
                alt="Colaborativo"
                className={styles.card__image}
              />
              <div className={styles.card__gradient} />
            </div>
            <div className={styles.card__content}>
              <div className={styles.card__iconContainer}>
                <i className="an an-users-three"></i>
              </div>
              <div className={styles.card__bottom}>
                <div className={styles.card__textContent}>
                  <h3 className={styles.card__title}>Colaborativo</h3>
                  <p className={styles.card__description}>
                    Trabalhamos como uma família criativa para criar algo
                    extraordinário. Customize a biblioteca de Web Components com
                    Javascript e HTML.
                  </p>
                </div>
                <a href="#" className={styles.card__link}>
                  Saiba mais
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.principals__card}
            variants={cardVariants}
          >
            <div className={styles.card__imageContainer}>
              <img
                src="/img/principals/business.png"
                alt="Impulsionar Negócios"
                className={styles.card__image}
              />
              <div className={styles.card__gradient} />
            </div>
            <div className={styles.card__content}>
              <div className={styles.card__iconContainer}>
                <i className="an an-trend-up"></i>
              </div>
              <div className={styles.card__bottom}>
                <div className={styles.card__textContent}>
                  <h3 className={styles.card__title}>Impulsionar Negócios</h3>
                  <p className={styles.card__description}>
                    Focamos em criar produtos que transformem negócios, com
                    consistência e confiança para alcançar o sucesso.
                  </p>
                </div>
                <a href="#" className={styles.card__link}>
                  Saiba mais
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
