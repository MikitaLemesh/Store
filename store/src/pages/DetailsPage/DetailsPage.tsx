import React from 'react';
import { PRODUCTS, idProduct } from '../../constants/constants';
import { DetailsContainer } from './DetailsContainer/DetailsContainer';
import { TitleDetailsPage } from './TitleDetailsPage/TitleDetailsPage';
import { ImagesContainer } from './ImagesContainer/ImagesContainer';
import { InfoDetails } from './InfoDetails/InfoDetails';
import { PriceContainer } from './PriceContainer/PriceContainer';

export const DetailsPage = () => {
  const item = PRODUCTS[idProduct.id];
  return (
    <DetailsContainer>
      <TitleDetailsPage brand={item.brand} />
      <ImagesContainer imageFirst={item.imageFirst} imageSecond={item.imageSecond} imageThird={item.imageThird} brand={item.brand}/>
      <InfoDetails description={item.description} price={item.price} rating={item.rating} type={item.type} stock={item.stock}/>
      <PriceContainer price={item.price}/>
    </DetailsContainer>
  )
}