import React, { useState } from 'react';
import { node } from 'prop-types';

import productsAPI from "../service/api";

import Context from './Context';

function Provider({ children }) {
  const [ products, setProducts ] = useState([...productsAPI])


  const contextValue = {
    setProducts,
    products,
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
