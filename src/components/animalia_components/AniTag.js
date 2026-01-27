import React from 'react';
import styles from './AniTag.module.css';

const AniTag = ({ text, variant = 'default' }) => {
  return (
    <div className={`${styles.tag} ${styles[variant]}`}>
      {text}
    </div>
  );
};

export default AniTag;
