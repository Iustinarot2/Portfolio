import React from 'react';

import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl('about/aboutImage.png')} 
            alt="Me sitting with a laptop" 
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor Icon'></img> 
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Development</h3>
                        <p>Experienced in website development through academic projects during college and personal initiatives after university graduation</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt='Server Icon'></img> 
                    <div className={styles.aboutItemText}>
                        <h3>Backend Development</h3>
                        <p>Proficient in Python, C/C++, and Java, as a result of my Computer Science degree</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/machineLearning.png')} alt='UI Icon'></img> 
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning</h3>
                        <p>Understanding and experience in machine learning through my university dissertation project</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
        
  )
}

