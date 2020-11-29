import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

const FiguresPage = () => (
  <div>
    <h1>Figures</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/figures' component={FiguresPage} />
      </Switch>
    </div>
  );
}

export default App;
