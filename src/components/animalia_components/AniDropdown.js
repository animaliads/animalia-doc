import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from '@docusaurus/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './AniDropdown.module.css';

const AniDropdown = ({ options, className }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    history.push(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={className} ref={dropdownRef}>
      <button className={styles.dropdownHeader} onClick={handleToggleDropdown}>
        Primeiros Passos
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className={styles.dropdownArrow} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li key={option.value} className={styles.dropdownItem} onClick={() => handleSelectOption(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AniDropdown;
