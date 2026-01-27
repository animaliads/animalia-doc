import React from 'react';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBook } from '@fortawesome/free-solid-svg-icons';
import styles from './AniButtonTertiary.module.css'; // Ajuste o caminho conforme a estrutura de pastas

const AniButtonTertiary = ({ to, label, icon, iconPosition = 'right' }) => {
    const displayIcon = icon || faChevronRight;

    return (
        <Link to={to} className={styles.learnMoreButton}>
            {iconPosition === 'left' && <FontAwesomeIcon icon={displayIcon} />}
            {label}
            {iconPosition === 'right' && <FontAwesomeIcon icon={displayIcon} />}
        </Link>
    );
};

export default AniButtonTertiary;
