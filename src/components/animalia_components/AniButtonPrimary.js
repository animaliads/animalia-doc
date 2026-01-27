import React from 'react';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './AniButtonPrimary.module.css';

const AniButtonPrimary = ({ to, label, icon }) => {
    return (
        <Link to={to} className={styles.primaryButton}>
            {label}
            {icon && <FontAwesomeIcon icon={icon} />}
        </Link>
    );
};

export default AniButtonPrimary;
