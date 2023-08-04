import React from 'react';
import { Link } from 'react-router-dom';
import style from './logo.module.css';

export const Logo = () => {
  return (
    <div className={style.logo__container}>
      <img src='./images/logo.svg' alt='logo' className={style.img__logo}/>
      <h1><Link to='/'>Online Store</Link></h1>
    </div>
  )
}