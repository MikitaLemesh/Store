import React from 'react';
import styles from './buttonDetails.module.css';
import { Link } from 'react-router-dom';
import { PRODUCTS, idProduct } from '../../../constants/constants';

export const ButtonDetails = () => {
  const showDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget.parentNode?.parentNode as HTMLElement;
    const idCard: number = Number(target.getAttribute('id'));
    for (let i = 0; i < PRODUCTS.length; i += 1) {
      if (PRODUCTS[i].id === idCard) {
        idProduct.id = i;
        break;
      }
    }
  }
  return (
    <>
      <button onClick={showDetails} className={styles.btn__details}><Link to='/details' className={styles.btn__span}>Details</Link></button>
    </>
  )
}