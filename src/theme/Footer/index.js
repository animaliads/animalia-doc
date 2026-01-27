import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import AniButtonSecondary from "../../components/animalia_components/AniButtonSecondary";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const footerSections = [
    {
      title: "Primeiros passos",
      items: [
        { label: "Para Designers", to: "/docs/about/getting-started-design" },
        { label: "Para Devs", to: "/docs/about/getting-started" },
        { label: "Guia de Contribuição", to: "/docs/about/contribution-guide" },
      ],
    },
    {
      title: "Links úteis",
      items: [
        { label: "Repositório no Github", href: "https://github.com/animaliads" },
        { label: "API no Storybook", href: "http://animaliads.io/?path=/docs/api-button--sample" },
        { label: "Biblioteca no Figma", href: "https://www.figma.com/@animaliads" },
      ],
    },
    {
      title: "Outros",
      items: [
        { label: "Changelog", to: "/docs/about/changelog" },
        { label: "Princípios do Animalia", to: "/docs/about/principles" },
      ],
    },
    {
      title: "Comunidade",
      items: [
        { label: "Contribua", to: "/docs/about/contribution-guide" },
        { label: "Código de Conduta", to: "/docs/about/code-of-conduct" },
        { label: "Suporte", href: "https://github.com/animaliads/animalia-web-components/issues" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Dúvidas, ideias ou sugestões?</h2>
          </div>
          <AniButtonSecondary
            to="mailto:animalia@totvs.com.br"
            label="Envie sua mensagem"
            icon={faEnvelope}
          />
        </div>

        <div className={styles.linksSection}>
          {footerSections.map((section, idx) => (
            <div key={idx} className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{section.title}</h3>
              <ul className={styles.linkList}>
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.to ? (
                      <Link to={item.to} className={styles.link}>
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.logoContainer}>
            <img
              src="/img/logo_dark.svg"
              alt="Animalia DS"
              className={styles.logo}
            />
          </div>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Animalia Design System 🦎
          </p>
        </div>
      </div>
    </footer>
  );
}
