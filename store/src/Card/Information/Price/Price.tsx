import React from 'react';
import { IInfo } from '../../../interfaces/card/interface';
import styles from './price.module.css';

export const Price = (props: IInfo) => {
  return (
    <li className={styles.li__price}>{`Price: ${props.price}$`}</li>
  )
}