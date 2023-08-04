import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cartLogo.module.css';

export const CartLogo = () => {
  return (
    <button className={styles.btn__header}>
      <Link to='/cart'>
        <input type='image' src='./images/cart.svg' alt='cart' className={styles.img__cart}/>
      </Link>
    </button>
  )
}