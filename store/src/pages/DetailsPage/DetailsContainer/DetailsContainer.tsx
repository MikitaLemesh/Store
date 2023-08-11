import React from 'react';
import { IChildren } from '../../../interfaces/detailsPage/interface';
import styles from './detailsContainer.module.css'

export const DetailsContainer = (props: IChildren) => {
  return (
    <div className={styles.details__container}>
      {props.children}
    </div>
  )
}