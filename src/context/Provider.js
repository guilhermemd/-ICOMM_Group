import React, { useState } from 'react';
import { node } from 'prop-types';

import productsAPI from "../service/api";

import Context from './Context';

function Provider({ children }) {
  const [ products, setProducts ] = useState([...productsAPI])
  const [ liked, setLiked ] = useState([]);

  const likedProducts = (id) => {
    setLiked([ ...liked, id])
    const alreadyLiked = liked.filter((item) => item === id);

    if (alreadyLiked.length > 2) {
      const removeLiked = liked.filter((item) => item !== id);
      return setLiked([...removeLiked]);
    }
    

  }


  const contextValue = {
    setProducts,
    products,
    liked, 
    likedProducts, 
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
