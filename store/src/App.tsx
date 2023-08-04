import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card } from './Card/Card';
import { PRODUCTS } from './constants/constants';
import { CartPage } from './pages/CartPage/CartPage';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { Page } from './pages/Page';
import { MainePage } from './pages/MainePage/MainePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<MainePage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/details' element={<DetailsPage />}/>
          <Route path='*' />
        </Route>
      </Routes>
      {PRODUCTS.map((item) => {
        return <Card card={item} />
      })}
    </div>
  );
}

export default App;
