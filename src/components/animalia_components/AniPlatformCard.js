import React from 'react';
import Link from '@docusaurus/Link';
import AniStatusBadge from './AniStatusBadge';
import styles from './AniPlatformCard.module.css';

const AniPlatformCard = ({
  icon,
  title,
  statusType = 'positive',
  statusText,
  link,
  external = false
}) => {
  const cardContent = (
    <>
      <div className={styles.iconContainer}>
        <i className={`an ${icon}`}></i>
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        {statusText && (
          <AniStatusBadge text={statusText} variant={statusType} />
        )}
      </div>
    </>
  );

  if (link) {
    if (external) {
      return (
        <a
          href={link}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      );
    } else {
      return (
        <Link to={link} className={styles.card}>
          {cardContent}
        </Link>
      );
    }
  }

  return (
    <div className={styles.card}>
      {cardContent}
    </div>
  );
};

export default AniPlatformCard;
