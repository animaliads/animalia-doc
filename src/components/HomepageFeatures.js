import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    
    title: 'Acessível e inclusivo',
    Svg: require('../../static/img/img1.svg').default,
    description: (
      <>
        Acessibilidade
      </>
    ),
  },
  {
    title: 'Colaborativo',
    Svg: require('../../static/img/img2.svg').default,
    description: (
      <>
        Colaboração
      </>
    ),
  },
  { 
    title: 'Impulsionar negócios',
    Svg: require('../../static/img/img3.svg').default,
    description: (
      <>
       Negócio
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--left">
        <p className={styles.tagline}>{description}</p>
        <h3 className={styles.headline02}>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
           <div className={clsx('col col--3')}>
           <div className={styles.presentation}>
             <p className={styles.tagline}>Nossos pilares</p>
              <h3 className={styles.headline01}>Princípios do Animalia
Design System</h3>
              <p>Os princípios são nossa direção. São eles que orientam todas as diretrizes e decisões em relação ao design system e a tudo que ele entrega.</p>
          </div>
        </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
