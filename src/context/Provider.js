import React, { useState } from 'react';
import { node } from 'prop-types';

import productsAPI from "../service/api";

import Context from './Context';

function Provider({ children }) {
  const [ products, setProducts ] = useState([...productsAPI])
  const [ liked, setLiked ] = useState([]);
  const [ cart, setCart ] = useState([]);
  console.log(cart.length + ' fora');
  const likedProducts = (id) => {
    const alreadyLiked = liked.includes(id);

    if (alreadyLiked) {
      const removeLiked = liked.filter((item) => item !== id);
      setLiked([...removeLiked]);
      return alreadyLiked
    }

    if (!alreadyLiked) {
      setLiked([ ...liked, id]);
      return alreadyLiked
    }
  }

  const addToCartProvider = (id) => {
    setCart([ ...cart, id ]);
    console.log(cart.length + ' dentro da funcao');
  }


  const contextValue = {
    setProducts,
    products,
    liked, 
    likedProducts,
    addToCartProvider, 
    cart,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
