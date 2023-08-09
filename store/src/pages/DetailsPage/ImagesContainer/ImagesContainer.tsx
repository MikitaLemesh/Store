import React, { useState } from 'react';
import styles from './imagesContainer.module.css';
import { IImages } from '../../../interfaces/card/interface';

export const ImagesContainer = (props: IImages) => {
  const [image, setImage] = useState(props.imageFirst)
  const changeImg = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const srcSource: string | null = target.getAttribute('src');
    if(srcSource) {
      setImage(srcSource)
    }
  }
  return (
    <div className={styles.div__container}>
      <div className={styles.div__images}>
        <input type='image' src={props.imageFirst} alt={props.brand} className={styles.img__size} onClick={changeImg} />
        <input type='image' src={props.imageSecond} alt={props.brand} className={styles.img__size} onClick={changeImg} />
        <input type='image' src={props.imageThird} alt={props.brand} className={styles.img__size} onClick={changeImg} />
      </div>
      <img src={image} alt={props.brand} className={styles.img__mane}/>
    </div>
  )
}