import React from 'react';
import styles from './AniStatusBadge.module.css';

const AniStatusBadge = ({ text, variant = 'positive' }) => {
  return (
    <div className={styles.badge}>
      <span className={`${styles.dot} ${styles[variant]}`}></span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default AniStatusBadge;
