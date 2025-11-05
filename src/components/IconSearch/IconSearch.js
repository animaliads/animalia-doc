import React, { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { motion } from 'framer-motion';
import { fetchIconsData, getIconStats } from './utils/iconData';
import IconSearchBar from './IconSearchBar';
import IconFilter from './IconFilter';
import IconGrid from './IconGrid';
import styles from './IconSearch.module.css';

/**
 * IconSearch component - main container for icon search functionality
 */
export default function IconSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [variant, setVariant] = useState('regular');
  const [regularIcons, setRegularIcons] = useState([]);
  const [filledIcons, setFilledIcons] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load icons on mount (only once)
  useEffect(() => {
    async function loadIcons() {
      setLoading(true);
      try {
        const iconsData = await fetchIconsData();
        setRegularIcons(iconsData.regular);
        setFilledIcons(iconsData.filled);
      } catch (error) {
        console.error('Error loading icons:', error);
      } finally {
        setLoading(false);
      }
    }

    loadIcons();
  }, []);

  // Get current icon set based on variant
  const currentIcons = useMemo(() => {
    return variant === 'filled' ? filledIcons : regularIcons;
  }, [variant, regularIcons, filledIcons]);

  // Get stats for current variant
  const stats = useMemo(() => {
    return getIconStats(currentIcons);
  }, [currentIcons]);

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(currentIcons, {
      keys: ['name', 'tags', 'searchText'],
      threshold: 0.3, // Lower = more strict, Higher = more fuzzy
      includeScore: true,
      minMatchCharLength: 2,
    });
  }, [currentIcons]);

  // Filter icons based on search term
  const filteredIcons = useMemo(() => {
    if (!searchTerm.trim()) {
      return currentIcons;
    }

    const results = fuse.search(searchTerm);
    return results.map(result => result.item);
  }, [searchTerm, fuse, currentIcons]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}>
            <i className="an an-loader"></i>
          </div>
          <p className={styles.loadingText}>Carregando ícones...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Biblioteca de Ícones</h1>
        <p className={styles.subtitle}>
          Pesquise, visualize e copie ícones do Animalia Design System
        </p>
        <p className={styles.stats}>
          {stats.totalIcons} ícones disponíveis
        </p>
      </motion.div>

      <div className={styles.content}>
        <IconFilter variant={variant} onVariantChange={setVariant} />

        <IconSearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          resultsCount={filteredIcons.length}
          totalCount={stats.totalIcons}
        />

        <IconGrid icons={filteredIcons} variant={variant} />
      </div>
    </div>
  );
}
