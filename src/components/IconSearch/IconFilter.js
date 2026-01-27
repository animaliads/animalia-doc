import React from 'react';
import { motion } from 'framer-motion';
import styles from './IconFilter.module.css';

/**
 * IconFilter component - toggle between regular and filled icon variants
 */
export default function IconFilter({ variant, onVariantChange }) {
  return (
    <motion.div
      className={styles.filterContainer}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <span className={styles.filterLabel}>Estilo:</span>
      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterButton} ${variant === 'regular' ? styles.active : ''}`}
          onClick={() => onVariantChange('regular')}
        >
          <i className={`an an-circle ${styles.iconPreview}`}></i>
          Regular
        </button>
        <button
          className={`${styles.filterButton} ${variant === 'filled' ? styles.active : ''}`}
          onClick={() => onVariantChange('filled')}
        >
          <i className={`an-fill an-circle ${styles.iconPreview}`}></i>
          Preenchido
        </button>
      </div>
    </motion.div>
  );
}
