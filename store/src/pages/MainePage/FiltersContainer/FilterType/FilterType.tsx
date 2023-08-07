import React from 'react';
import { IFilterType } from '../../../../interfaces/mainePage/interface';
import { PRODUCTS } from '../../../../constants/constants';

const findTypes = (): IFilterType => {
  const arrayCategory = PRODUCTS.reduce((acc: IFilterType, item) => {
    if(acc[item.type]) {
      acc[item.type] += 1;  
    } else {
      acc[item.type] = 1;  
    }
    return acc;
  }, {})
  return arrayCategory;
}
export const FilterType = () => {
  const showItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const elements = document.querySelectorAll('input'); 
    const arrayFromElements = Array.from(elements)
    const arrayChecked = arrayFromElements.map((item) => item.checked)
  }
  return (
    <fieldset>
      <legend>Category</legend>
      {Object.entries(findTypes()).map((item): React.ReactNode => {
        return (
          <>
            <div>
              <input type='checkbox' id={item[0]} name={item[0]} onChange={showItems}/>
              <label htmlFor={item[0]}>{item[0]}</label>
            </div>
            <p>{item[1]}</p>
          </>
        )
      })}
    </fieldset>
  )
}