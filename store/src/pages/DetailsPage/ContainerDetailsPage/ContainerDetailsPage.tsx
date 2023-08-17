import React from 'react';
import { IChildren } from '../../../interfaces/detailsPage/interface';
import styles from './containerDetailsPage.module.css';

export const Container = (props: IChildren) => {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  )
} 