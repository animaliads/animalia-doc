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
    <header className={clsx('hero', styles.hero__banner)}>
      <div className="container">
        <div className={styles.hero__intro}>
          <h1>Animalia DS</h1>
          <p>O Design System open source da TOTVS adaptativo para ambientes
            de negócios complexos</p>
          <Link className={styles.hero_dropdown} to="/docs/about/getting-started">
            Primeiros passos
          </Link>
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
