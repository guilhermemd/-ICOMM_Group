import React from 'react';
import Slider from 'react-slick';
import '../style/carousel.css';

import products from '../service/api'



function Carousel() {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
  };
  
  // console.log(products)
  return (
    <section className="products">
      <div className="products-container">
        <div className="products__title">
          <h1>DESTAQUES</h1>
        </div>
        <div className="products__carousel">
          <Slider {...settings}>
            {products.map(({ image, product, price, price_x }) => (
              <div>
                <div className="product-container-box">
                  <div className="product-container" >
                    <img className="product-img" src={ image } alt={ product }/>
                    <div className="product-info">
                      <h3 className="product-name">{ product }</h3>
                      <h4 className="product-price">{ price }</h4>
                      <p className="product-price_x">{ price_x }</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>  
    </section> 
  );
}

export default Carousel;
