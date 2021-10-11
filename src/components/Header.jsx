import React, { useContext } from 'react';
import Context from '../context/Context';
import logo from '../images/logo.png';
import '../style/header.css';
import { FiShoppingCart } from 'react-icons/fi';


function Header() {
  const { cart } = useContext(Context);

  let cartLength = cart.length;

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
        <div>
          <div className="cart__number">{ cartLength }</div> 
          <FiShoppingCart size={30} className="header__cart" />
        </div>
      </div>  
    </nav>
  );
}

export default Header;