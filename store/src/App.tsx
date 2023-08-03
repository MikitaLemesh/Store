import React from 'react';
import { Card } from './Card/Card';
import { PRODUCTS } from './constants/constants';

function App() {
  return (
    <div>
      {PRODUCTS.map((item) => {
        return <Card card={item} />
      })}
    </div>
  );
}

export default App;
