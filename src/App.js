import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInOutPage from './pages/sign-in-out/sign-in-out.component';
import Header from './components/header/header.component';

const FiguresPage = () => (
  <div>
    <h1>Figures</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/figures' component={FiguresPage} />
        <Route exact path='/signin' component={SignInOutPage} />
      </Switch>
    </div>
  );
}

export default App;
