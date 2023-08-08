import React from 'react';
import { IImages } from '../../../interfaces/card/interface';

export const TitleDetailsPage = (props: IImages) => {
  return (
    <h2>{props.brand}</h2>
  )
}