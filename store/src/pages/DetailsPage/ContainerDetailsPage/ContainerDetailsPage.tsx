import React from 'react';
import { IChildren } from '../../../interfaces/detailsPage/interface';
import styles from './container.module.css';

export const Container = (props: IChildren) => {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  )
} 