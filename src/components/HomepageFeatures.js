import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Novidades',
    description: (
      <>
        Confira as novidades liberadas na nossa última release!
      </>
    ),
  },
  {
    title: 'Biblioteca no Figma',
    description: (
      <>
        Acesse o UI Kit de componentes, ícones e fundamentos no Figma.
      </>
    ),
  },
  {
    title: 'Faça parte',
    description: (
      <>
        Colabore e tenha seu nome gravado em nossa história!
      </>
    ),
  },
];

const AcessoRapidoList = [
  { title: 'Novidades' },
  { title: 'Biblioteca no Figma' },
  { title: 'Faça parte' },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className={styles.card}>
        <h3 className={styles.headline02}>{title}</h3>
        <p className={styles.tagline}>{description}</p>
      </div>
    </div>
  );
}

function AcessoRapido({title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className={styles.card__atalho}>
        <h3 className={styles.headline02}>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>

          <div className={styles.text__subtitle}>Mais acessados</div>
          <div className="row">
            {AcessoRapidoList.map((props, idx) => (
              <AcessoRapido key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <div className={styles.homepage__section1}>
        <div className={styles.section__textContent}>
          <div className={styles.section__textContent__title}>Acessível e Inclusivo</div>
          <div>
            <p>Garantimos que todos tenham acesso a uma experiência digital acolhedora e envolvente.</p>
            <p>Com componentes que nascem projetados para atender ao mais alto padrão de acessibilidade de acordo com as diretrizes da WCAG e conformidade com a Lei Brasileira de Inclusão.</p>
          </div>
        </div>
        <div className={styles.section__textContent}>
          <img src="../../static/img/img1.png" alt="teste" />
        </div>
      </div>

      <div className={styles.homepage__section2}>
        <div className={styles.section__textContent}>
          <img src="../../static/img/img2.png" alt="teste" />
        </div>
        <div className={styles.section__textContent}>
          <div className={styles.section__textContent__title}>Colaborativo</div>
          <div>
            <p>Trabalhamos juntos como uma família de mentes criativas para criar algo extraordinário.</p>
            <p>Usufrua e customize a biblioteca de componentes Web Components com base em Javascript e HTML puros, utilizando o framework de sua preferência.</p>
          </div>
        </div>
      </div>

      <div className={styles.homepage__section3}>
        <div className={styles.section__textContent}>
          <div className={styles.section__textContent__title}>Impulsionar Negócios</div>
          <div>
            <p>Focamos em criar produtos que transformem negócios, com consistência e confiança para alcançar o sucesso.</p>
            <p>Aumente a produtividade através de parceiros do nosso ecossistema com a Panthera Onca, uma biblioteca com base em Angular robusta e intuitiva, que provem também serviços para aplicações offline, tradução, tema personalizável e muito mais! Conheça mais aqui.</p>
          </div>
        </div>
        <div className={styles.section__textContent}>
          <img src="../../static/img/img3.png" alt="teste" />
        </div>
      </div>
    </div>
    
  );
}
