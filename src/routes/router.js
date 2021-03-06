import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from 'pages/Home';
import { Shop } from 'pages/Shop';
import { WishList } from 'pages/WishList';
import { About } from 'pages/About';
import { Tests } from 'pages/Tests';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route exact path="/wish-list">
        <WishList />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/tests">
        <Tests />
      </Route>
    </Switch>
  </BrowserRouter>
);
