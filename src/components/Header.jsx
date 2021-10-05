import React from 'react';
import logo from '../images/logo.png';
import '../style/header.css';
import { FiShoppingCart } from 'react-icons/fi';


function Header() {
  return (
    <div className="header">
      <div>
        <div className="header__content">
          <img
            src={ logo }
            alt="logo-icon"
            className="header__logo"
            />
          <h4 data-className="header__title">MCX</h4>
        </div>
      </div>  
      <FiShoppingCart className="header__cart" /> 
    </div>
  );
}

export default Header;