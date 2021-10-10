import React, { useState } from 'react';
import { node } from 'prop-types';

import productsAPI from "../service/api";

import Context from './Context';

function Provider({ children }) {
  const [ products, setProducts ] = useState([...productsAPI])
  const [ liked, setLiked ] = useState([]);

  const likedProducts = (id) => {
    // console.log('aqui id' + id)
    const alreadyLiked2 = liked.includes(id);

    if (alreadyLiked2) {
      const removeLiked = liked.filter((item) => item !== id);
      setLiked([...removeLiked]);
      // console.log(liked)
    }

    if (!alreadyLiked2) {
      setLiked([ ...liked, id]);
      // console.log(liked)
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
