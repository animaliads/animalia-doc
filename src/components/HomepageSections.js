import React from 'react';
import styles from './HomepageSections.module.css';
import ScrollFadeIn from './animations/ScrollFadeIn';

const HomepageSections = () => {
  return (
    <>
      <div className={styles.section}>
        <ScrollFadeIn className={styles.sectionContent} direction="right" distance={50}>
          <div className={styles.sectionContentTitle}>Acessível e Inclusivo</div>
          <div>
            <p>Garantimos que todos tenham acesso a uma experiência digital acolhedora e envolvente.</p>
            <p>Com componentes que nascem projetados para atender ao mais alto padrão de acessibilidade de acordo com as diretrizes da WCAG e conformidade com a Lei Brasileira de Inclusão.</p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn id='section2' className={styles.sectionContent} direction="left" distance={50} delay={0.2}>
          <img
            className={styles.sectionImage1}
            data-theme-image="default"
            src="../../static/img/img1.png"
            alt="Acessibilidade"
          />
        </ScrollFadeIn>
      </div>

      <div className={styles.sectionBg}>
        <div className={styles.section}>
          <ScrollFadeIn className={styles.sectionContent} direction="right" distance={50}>
            <img
              className={styles.sectionImage2}
              data-theme-image="default"
              src="../../static/img/img2.png"
              alt="Colaboração"
            />
          </ScrollFadeIn>

          <ScrollFadeIn className={styles.sectionContent} direction="left" distance={50} delay={0.2}>
            <div className={styles.sectionContentTitle}>Colaborativo</div>
            <div>
              <p>Trabalhamos juntos como uma família de mentes criativas para criar algo extraordinário.</p>
              <p>Usufrua e customize a biblioteca de componentes Web Components com base em Javascript e HTML puros, utilizando o framework de sua preferência.</p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      <div className={styles.section}>
        <ScrollFadeIn className={styles.sectionContent} direction="right" distance={50}>
          <div className={styles.sectionContentTitle}>Impulsionar Negócios</div>
          <div>
            <p>Focamos em criar produtos que transformem negócios, com consistência e confiança para alcançar o sucesso.</p>
            <p>Aumente a produtividade através de parceiros do nosso ecossistema com a <span className={styles.text_bold}>Panthera Onca</span>, uma biblioteca com base em Angular robusta e intuitiva. <a href="https://po-ui.io/" target="_blank" rel="noopener noreferrer">Conheça mais aqui!</a></p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn className={styles.sectionContent} direction="left" distance={50} delay={0.2}>
          <img
            className={styles.sectionImage3}
            data-theme-image="default"
            src="../../static/img/img3.png"
            alt="Negócios"
          />
        </ScrollFadeIn>
      </div>
    </>
  );
};

export default HomepageSections;
