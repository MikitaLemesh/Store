import React from 'react';
import { Description } from './Description/Description';
import { IInfo } from '../../../interfaces/card/interface';

export const InfoDetails = (props: IInfo) => {
  return (
    <div>
      <Description description={props.description} value={'Description:'} />
      <Description rating={props.rating} value={'Rating:'} />
      <Description stock={props.stock} value={'Stock:'} />
      <Description type={props.type} value={'Type:'} />
    </div>
  )
}