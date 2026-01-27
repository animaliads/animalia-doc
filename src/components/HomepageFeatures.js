import React from "react";
import styles from "./HomepageFeatures.module.css";
import AniTag from "./animalia_components/AniTag";
import ScrollFadeIn from "./animations/ScrollFadeIn";
import { motion } from "framer-motion";

const FeaturesList = [
  {
    title: "Componentes prontos",
    description: "Biblioteca de componentes para acelerar seu desenvolvimento.",
    icon: "cube",
  },
  {
    title: "Design Tokens",
    description:
      "Sistema de tokens para manter consistência visual em todos os produtos.",
    icon: "code",
  },
  {
    title: "Acessibilidade",
    description:
      "Componentes desenvolvidos seguindo as melhores práticas de acessibilidade.",
    icon: "hand-heart",
  },
  {
    title: "Documentação completa",
    description:
      "Guias detalhados e exemplos práticos para facilitar a implementação.",
    icon: "book-open",
  },
  {
    title: "Open Source",
    description:
      "Código aberto e gratuito para toda a comunidade TOTVS e além.",
    icon: "globe",
  },
];

function FeatureCard({ title, description, icon }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconContainer}>
        <i className={`an an-${icon} ${styles.icon}`}></i>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  return (
    <section className={styles.features}>
      <div className={styles.featuresWrapper}>
        <ScrollFadeIn className={styles.featuresHeader} delay={0.1}>
          <AniTag text="Conheça o Animalia DS" variant="primary" />
          <h2 className={styles.featuresTitle}>
            Tudo o que você precisa para criar experiências consistentes
          </h2>
        </ScrollFadeIn>
        <div className={styles.featuresContent}>
          <motion.div
            className={styles.featuresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {FeaturesList.map((feature, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
          <ScrollFadeIn
            className={styles.featuresImage}
            direction="left"
            distance={50}
            delay={0.3}
          >
            <img src="/img/leopard-feature.jpg" alt="Animalia Design System" />
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
