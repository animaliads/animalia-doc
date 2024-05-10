import React from 'react';
import AniCardInteractive from './animalia_components/AniCardInteractive.js';
import styles from './HomepageFeatures.module.css';

const AcessoRapidoList = [
  {
    title: 'Novidades',
    description: 'Confira as novidades liberadas na nossa última release!',
    link: '/docs/about/changelog',
    isNew: true,
  },
  {
    title: 'Biblioteca no Figma',
    description: 'Acesse o UI Kit de componentes, ícones e fundamentos no Figma.',
    link: 'https://www.figma.com/@animaliads',
    isNew: false,
  },
  {
    title: 'Faça parte',
    description: 'Colabore e tenha seu nome gravado em nossa história!',
    link: '/docs/about/contribution-guide',
    isNew: false,
  },
];

const MaisAcessadosList = [
  { title: 'Componentes', link: '/docs/components/button' },
  { title: 'Biblioteca no Figma', link: 'https://www.figma.com/@animaliads' },
  { title: 'Faça parte', link: '/docs/about/changelog' },
];

export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <div className={styles.featuresRow}>
          {AcessoRapidoList.map((props, idx) => (
            <AniCardInteractive key={idx} {...props} />
          ))}
        </div>

        <div className={styles.featuresTitleContainer}>
          <div className={styles.featuresTitle}>Mais acessados</div>
        </div>

        <div className={styles.featuresRow}>
          {MaisAcessadosList.map((props, idx) => (
            <AniCardInteractive key={idx} {...props} />
          ))}
        </div>
      </section>
    </div>
  );
}