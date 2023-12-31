import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartPage } from './pages/CartPage/CartPage';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { Page } from './pages/Page';
import { MainePage } from './pages/MainePage/MainePage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<MainePage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/details' element={<DetailsPage />}/>
          <Route path='*' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
