import React from 'react';
import { motion } from 'framer-motion';
import IconCard from './IconCard';
import styles from './IconGrid.module.css';

/**
 * IconGrid component - displays icons in a responsive grid layout
 */
export default function IconGrid({ icons, variant }) {
  if (icons.length === 0) {
    return (
      <motion.div
        className={styles.emptyState}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.emptyIcon}>
          <i className="an an-search"></i>
        </div>
        <h3 className={styles.emptyTitle}>Nenhum ícone encontrado</h3>
        <p className={styles.emptyMessage}>
          Tente ajustar sua pesquisa ou limpar os filtros
        </p>
      </motion.div>
    );
  }

  return (
    <div className={styles.grid}>
      {icons.map((icon, index) => (
        <IconCard key={icon.id} icon={icon} index={index} variant={variant} />
      ))}
    </div>
  );
}
