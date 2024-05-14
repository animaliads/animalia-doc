import React from 'react';
import styles from './AniTag.module.css';

const AniTag = ({ text }) => {
  return (
    <div className={styles.tag}>
      {text}
    </div>
  );
};

export default AniTag;
