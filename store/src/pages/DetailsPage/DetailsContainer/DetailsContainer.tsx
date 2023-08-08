import React from 'react';
import { IChildren } from '../../../interfaces/detailsPage/interface';

export const DetailsContainer = (props: IChildren) => {
  return (
    <div>
      {props.children}
    </div>
  )
}