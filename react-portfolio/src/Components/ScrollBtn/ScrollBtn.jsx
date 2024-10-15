import React, { useState, useEffect } from 'react';
import styles from './ScrollBtn.module.css';

export const ScrollBtn = () => {  // Change to named export
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className={styles.scrollBtn}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};
