import React from 'react';
import { Card } from '../../../Card/Card';
import { PRODUCTS } from '../../../constants/constants';
import styles from './itemsContainer.module.css';

export const ItemsContainer = () => {
  return (
    <div className={styles.div__items}>
      {PRODUCTS.map((item) => {
        return <Card card={item} />
      })}
    </div>
  )
}