import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Context from '../context/Context';
import logo from '../images/logo.png';
import '../style/header.css';

function Header() {
  const { cart } = useContext(Context);

  const cartLength = cart.length;

  return (
    <nav className="header">
      <div className="header__container">
        <div className="header__logobox">
          <img
            src={logo}
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
