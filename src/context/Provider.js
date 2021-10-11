import React, { useState } from 'react';
import { node } from 'prop-types';

import productsAPI from "../service/api";

import Context from './Context';

function Provider({ children }) {
  const [ products, setProducts ] = useState([...productsAPI])
  const [ liked, setLiked ] = useState([]);
  const [ cart, setCart ] = useState([]);

  const likedProducts = (id) => {
    const alreadyLiked = liked.includes(id);

    if (alreadyLiked) {
      const removeLiked = liked.filter((item) => item !== id);
      setLiked([...removeLiked]);
    }

    if (!alreadyLiked) {
      setLiked([ ...liked, id]); 
    }
  }

  const addToCartProvider = (id) => {
    setCart([ ...cart, id ]);
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
