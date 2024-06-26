import React from 'react';
import styles from './HomepageSections.module.css';

const HomepageSections = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionContentTitle}>Acessível e Inclusivo</div>
          <div>
            <p>Garantimos que todos tenham acesso a uma experiência digital acolhedora e envolvente.</p>
            <p>Com componentes que nascem projetados para atender ao mais alto padrão de acessibilidade de acordo com as diretrizes da WCAG e conformidade com a Lei Brasileira de Inclusão.</p>
          </div>
        </div>

        <div id='section2' className={styles.sectionContent}>
          <img
            className={styles.sectionImage1}
            data-theme-image="default"
            src="../../static/img/img1.png"
            alt="Acessibilidade"
          />
        </div>
      </div>

      <div className={styles.sectionBg}>
        <div className={styles.section}>
          <div className={styles.sectionContent}>
            <img
              className={styles.sectionImage2}
              data-theme-image="default"
              src="../../static/img/img2.png"
              alt="Colaboração"
            />
          </div>

          <div className={styles.sectionContent}>
            <div className={styles.sectionContentTitle}>Colaborativo</div>
            <div>
              <p>Trabalhamos juntos como uma família de mentes criativas para criar algo extraordinário.</p>
              <p>Usufrua e customize a biblioteca de componentes Web Components com base em Javascript e HTML puros, utilizando o framework de sua preferência.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionContentTitle}>Impulsionar Negócios</div>
          <div>
            <p>Focamos em criar produtos que transformem negócios, com consistência e confiança para alcançar o sucesso.</p>
            <p>Aumente a produtividade através de parceiros do nosso ecossistema com a <span className={styles.text_bold}>Panthera Onca</span>, uma biblioteca com base em Angular robusta e intuitiva. <a href="https://po-ui.io/" target="_blank" rel="noopener noreferrer">Conheça mais aqui!</a></p>
          </div>
        </div>

        <div className={styles.sectionContent}>
          <img
            className={styles.sectionImage3}
            data-theme-image="default"
            src="../../static/img/img3.png"
            alt="Negócios"
          />
        </div>
      </div>
    </>
  );
};

export default HomepageSections;
