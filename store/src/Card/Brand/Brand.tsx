import React from 'react';
import { IImages } from '../../interfaces/card/interface';
import styles from './brand.module.css';

export const Brand = (props: IImages) => {
  return (
    <h2 className={styles.brand}>{props.brand}</h2>
  )
}