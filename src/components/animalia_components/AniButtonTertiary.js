import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './AniButtonTertiary.module.css'; // Ajuste o caminho conforme a estrutura de pastas

const AniButtonTertiary = ({ to, label }) => {
    return (
        <Link to={to} className={styles.learnMoreButton}>
            {label}
            <FontAwesomeIcon icon={faChevronRight} />
        </Link>
    );
};

export default AniButtonTertiary;
