import React from 'react';
import { PRODUCTS, idProduct } from '../../constants/constants';
import { DetailsContainer } from './DetailsContainer/DetailsContainer';
import { TitleDetailsPage } from './TitleDetailsPage/TitleDetailsPage';
import { ImagesContainer } from './ImagesContainer/ImagesContainer';

export const DetailsPage = () => {
  const item = PRODUCTS[idProduct.id];
  return (
    <DetailsContainer>
      <TitleDetailsPage brand={item.brand} />
      <ImagesContainer imageFirst={item.imageFirst} imageSecond={item.imageSecond} imageThird={item.imageThird} brand={item.brand}/>
    </DetailsContainer>
  )
}