import React from 'react';
import Header from './components/Header';
import Season from './components/Season';
import Carousel from './components/Carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style/app.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider >
      <Header />
      <Season />
      <Carousel />
    </ Provider>
  );
}

export default App;
