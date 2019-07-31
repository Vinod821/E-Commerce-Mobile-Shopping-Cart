import React, { Fragment } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from './components/NavBar';
import { ProductList } from './components/ProductList';
import { Product } from './components/Product';
import { Details } from './components/Details';
import { Cart } from './components/cart'
import { Default } from './components/Default';
import {Route, Link, Switch } from 'react-router-dom';
import Modal from './components/Modal'

function App() {
  return (
    <Fragment>
      <NavBar />
     
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route  path="/details/:id" component={Details} />
          <Route  path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
     
    </Fragment>
  );
}

export default App;
