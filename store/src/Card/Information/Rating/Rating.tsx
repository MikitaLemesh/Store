import React from 'react';
import { IInfo } from '../../../interfaces/card/interface';
import styles from './rating.module.css';

export const Rating = (props: IInfo) => {
  return (
    <li className={styles.li__rating}>{`Rating: ${props.rating}`}</li>
  )
}