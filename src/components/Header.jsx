import React, { useContext } from 'react';
import Context from '../context/Context';
import logo from '../images/logo.png';
import '../style/header.css';
import { FiShoppingCart } from 'react-icons/fi';


function Header() {
  const { cart } = useContext(Context);

  // let cartLength = cart.length;
  console.log(cart, "header")


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
          <FiShoppingCart className="header__cart" />
          {/* <p>{ cartLength }</p>  */}
        </div>
      </div>  
    </nav>
  );
}

export default Header;