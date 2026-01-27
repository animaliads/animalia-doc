import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getIconClassName } from './utils/iconData';
import styles from './IconCard.module.css';

/**
 * IconCard component - displays a single icon with copy-to-clipboard functionality
 */
export default function IconCard({ icon, index, variant = 'regular' }) {
  const [showCopied, setShowCopied] = useState(false);

  // Generate the full class name based on current variant
  const fullClassName = getIconClassName(icon.className, variant);

  const handleCopyToClipboard = async () => {
    try {
      // Copy the full class name to clipboard
      await navigator.clipboard.writeText(fullClassName);

      // Show copied message
      setShowCopied(true);

      // Hide after 2 seconds
      setTimeout(() => {
        setShowCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      className={styles.card}
      onClick={handleCopyToClipboard}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.01,
        ease: [0.6, 0.01, 0.05, 0.95]
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.iconWrapper}>
        <i className={`${fullClassName} ${styles.icon}`}></i>
      </div>
      <p className={styles.name}>{icon.name}</p>

      <div className={`${styles.copiedMessage} ${showCopied ? styles.show : ''}`}>
        Copied!
      </div>
    </motion.div>
  );
}
