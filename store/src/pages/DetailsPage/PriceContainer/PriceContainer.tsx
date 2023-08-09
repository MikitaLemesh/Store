import React from 'react';
import { ButtonAddToCartDetailsPage } from './ButtonAddToCart/ButtonAddToCart';
import { PriceDetailsPage } from './PriceDetailsPage/PriceDetailsPage';
import { IInfo } from '../../../interfaces/card/interface';

export const PriceContainer = (props: IInfo) => {
  return (
    <div>
      <PriceDetailsPage price={props.price}/>
      <ButtonAddToCartDetailsPage />
    </div>
  )
}