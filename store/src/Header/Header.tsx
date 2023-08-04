import React from 'react';
import { Logo } from './Logo/Logo';
import { CartLogo } from './CartLogo/CartLogo';
import { CartTotal } from './CartTotal/CartTotal';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <CartTotal />
      <CartLogo />
    </header>
  )
}