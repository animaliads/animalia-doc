import React from 'react';
import { Link } from 'react-router-dom';
import AniTag from './AniTag';
import styles from './AniCardInteractive.module.css';

const AniCardInteractive = ({ title, description, link, isNew }) => {
  const isExternal = link.startsWith('http');

  const cardContent = (
    <div className={styles.card}>
      {isNew && <AniTag text="Novo" />}
      <h3 className={styles.headline02}>{title}</h3>
      {description && <p className={styles.tagline}>{description}</p>}
    </div>
  );

  return (
    <div className={styles.cardContainer}>
      {isExternal ? (
        <a href={link} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
        <Link to={link} className={styles.cardLink}>
          {cardContent}
        </Link>
      )}
    </div>
  );
};

export default AniCardInteractive;
