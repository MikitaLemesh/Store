import React from 'react';
import { PRODUCTS, idProduct } from '../../constants/constants';
import { DetailsContainer } from './DetailsContainer/DetailsContainer';
import { TitleDetailsPage } from './TitleDetailsPage/TitleDetailsPage';

export const DetailsPage = () => {
  const item = PRODUCTS[idProduct.id];
  return (
    <DetailsContainer>
      <TitleDetailsPage brand={item.brand} />
    </DetailsContainer>
  )
}