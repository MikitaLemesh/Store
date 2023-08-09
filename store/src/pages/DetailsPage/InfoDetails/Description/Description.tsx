import React from 'react';
import styles from './description.module.css';
import { IInfo } from '../../../../interfaces/card/interface';

export const Description = (props: IInfo) => {
  const arrayFromProps = Object.values(props)
  return (
    <div>
      <h2>{arrayFromProps[1]}</h2>
      <p>{arrayFromProps[0]}</p>
    </div>
  )
} 