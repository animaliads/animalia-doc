import React from 'react';
import { motion } from 'framer-motion';
import styles from './IconSearchBar.module.css';

/**
 * IconSearchBar component - search input with icon and clear button
 */
export default function IconSearchBar({ searchTerm, onSearchChange, resultsCount, totalCount }) {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <motion.div
      className={styles.searchContainer}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.searchWrapper}>
        <i className={`an an-search ${styles.searchIcon}`}></i>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Pesquisar ícones... (ex: home, user, calendar)"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          autoFocus
        />
        <button
          className={`${styles.clearButton} ${searchTerm ? styles.show : ''}`}
          onClick={handleClear}
          aria-label="Limpar pesquisa"
        >
          <i className="an an-x"></i>
        </button>
      </div>

      {searchTerm && (
        <motion.div
          className={styles.resultsInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {resultsCount === 0
            ? 'Nenhum ícone encontrado'
            : `${resultsCount} ${resultsCount === 1 ? 'ícone encontrado' : 'ícones encontrados'} de ${totalCount}`}
        </motion.div>
      )}
    </motion.div>
  );
}
