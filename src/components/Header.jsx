import React from 'react';
import logo from '../images/logo.png';
import '../style/header.css';
import { FiShoppingCart } from 'react-icons/fi';


function Header() {
  return (
    <nav className="header">
      <div className="header__container">
        <div className="header__logobox">
          <img
            src={ logo }
            alt="logo-icon"
            className="header__logo"
            />
          <h4 data-className="header__title">MCX</h4>
        </div>
        <FiShoppingCart className="header__cart" /> 
      </div>  
    </nav>
  );
}

export default Header;