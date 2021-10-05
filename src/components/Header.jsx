import React from 'react';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <img
          src={ logo }
          alt="logo-icon"
          className="logo"
        />
        <h4 data-className="header__title">MCX</h4>
      </div>
    </div>
  );
}

// export default Header;