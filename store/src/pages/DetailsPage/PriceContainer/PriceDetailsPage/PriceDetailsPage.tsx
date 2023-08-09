import React from 'react';
import { IInfo } from '../../../../interfaces/card/interface';

export const PriceDetailsPage = (props: IInfo) => {
  return (
    <h2>{`${props.price}$`}</h2>
  )
}