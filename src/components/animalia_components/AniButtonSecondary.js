import React from 'react';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AniButtonSecondary.module.css';

const AniButtonSecondary = ({ to, label, icon }) => {
    return (
        <Link to={to} className={styles.secondaryButton}>
            {label}
            {icon && <FontAwesomeIcon icon={icon} />}
        </Link>
    );
};

export default AniButtonSecondary;
