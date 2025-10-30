import React from 'react';
import styles from './HomepageFeatures.module.css';
import AniTag from './animalia_components/AniTag';

const FeaturesList = [
  {
    title: 'Componentes prontos',
    description: 'Biblioteca completa de componentes React para acelerar seu desenvolvimento.',
    icon: 'cube',
  },
  {
    title: 'Design Tokens',
    description: 'Sistema de tokens para manter consistência visual em todos os produtos.',
    icon: 'code',
  },
  {
    title: 'Acessibilidade',
    description: 'Componentes desenvolvidos seguindo as melhores práticas de acessibilidade.',
    icon: 'hand-heart',
  },
  {
    title: 'Documentação completa',
    description: 'Guias detalhados e exemplos práticos para facilitar a implementação.',
    icon: 'book-open',
  },
  {
    title: 'Open Source',
    description: 'Código aberto e gratuito para toda a comunidade TOTVS e além.',
    icon: 'globe',
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
  return (
    <section className={styles.features}>
      <div className={styles.featuresWrapper}>
        <div className={styles.featuresHeader}>
          <AniTag text="Conheça o Animalia DS" variant="primary" />
          <h2 className={styles.featuresTitle}>
            Tudo o que você precisa para criar experiências consistentes
          </h2>
        </div>
        <div className={styles.featuresContent}>
          <div className={styles.featuresGrid}>
            {FeaturesList.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
          <div className={styles.featuresImage}>
            <img src="/img/leopard-feature.jpg" alt="Animalia Design System" />
          </div>
        </div>
      </div>
    </section>
  );
}
