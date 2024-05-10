import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import AniDropdown from '../components/animalia_components/AniDropdown';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSections from '../components/HomepageSections';
import AniButtonTertiary from '../components/animalia_components/AniButtonTertiary';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const dropdownOptions = [
    { label: 'Para Designers', value: '/docs/about/getting-started-design' },
    { label: 'Para Devs', value: '/docs/about/getting-started' },
    { label: 'Guia de Contribuição', value: '/docs/about/contribution-guide' },
  ];

  return (
    <header className={clsx('hero', styles.hero__banner)}>
      <div className="container">
        <div className={styles.hero__intro}>
          <h1>Animalia DS</h1>
          <p>O Design System open source da TOTVS adaptativo para ambientes de negócios complexos</p>
          <AniDropdown className={styles.heroDropdown} options={dropdownOptions} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bem vindo ao ${siteConfig.title}`}
      description="Design system open source da TOTVS">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSections />
        <div className={styles.learnMoreContainer}>
          <AniButtonTertiary to="/docs/about/intro" label="Saiba mais sobre o Animalia DS" />
        </div>
      </main>
    </Layout>
  );
}
