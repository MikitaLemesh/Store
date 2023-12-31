import React from 'react';
import styles from './card.module.css';
import { ICard } from '../interfaces/card/interface';
import { ImagesProduct } from './ImageProduct/ImagesProduct';
import { Information } from './Information/Information';
import { CardButtons } from './CardButtons/CardButtons';
import { Brand } from './Brand/Brand';
 
export const Card = (props: ICard) => {
  return (
    <div className={styles.card} id={props.card.id?.toString()}>
      <Brand brand={props.card.brand} />
      <div className={styles.div__position}>
        <ImagesProduct imageFirst={props.card.imageFirst} brand={props.card.brand} />
        <Information stock={props.card.stock} type={props.card.type} rating={props.card.rating} price={props.card.price} />
      </div>
      <CardButtons />
    </div>
  )
}