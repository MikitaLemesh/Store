import React from 'react';
import styles from './mainePage.module.css';
import { ItemsContainer } from './ItemsContainer/ItemsContainer';

export const MainePage = () => {
  return (
    <section className={styles.section__maine}>
      <ItemsContainer />
    </section>
  )
}