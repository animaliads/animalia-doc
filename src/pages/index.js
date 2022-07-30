import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.intro}>
        <h1>Boas-vindas ao Animalia Design System</h1>
          <p>Design system open source da TOTVS, que nasceu com o objetivo de melhorar a performance 
            no desenvolvimento de aplicações corporativas, facilitando a 
            comunicação entre os times de design e desenvolvimento</p>
           <div className={styles.buttons}>
            <Link
              className="ani-button-secondary"
             to="/docs/about/getting-started">
             Começando
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bem vindo ao ${siteConfig.title}`}
      description="Design system open source da TOTVS">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
