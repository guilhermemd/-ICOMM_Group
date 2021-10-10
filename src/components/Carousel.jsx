import React, { useContext } from 'react';
import Context from '../context/Context';

import Slider from "react-slick";
import "../style/carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiHeart} from "react-icons/fi";
import { FaHeart } from 'react-icons/fa'


function Carousel() {
  const { products, likedProducts, liked  } = useContext(Context);


const heartProducts = (id) => {
  const alreadyLiked = liked.includes(id);
  return (
    <button onClick={() => likedProducts(id)} >
      {(alreadyLiked) ? <FaHeart /> : <FiHeart />}
    </button>
  )
}


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const stylesPrevArrow = {
    backgroundColor: "#EEEEEE",
    border: "none",
    position: "absolute",
    left: "-2rem",
    top: "8rem",
    cursor: "pointer",
  };

  const stylesNextArrow = {
    backgroundColor: "#EEEEEE",
    border: "none",
    position: "absolute",
    right: "-2rem",
    top: "8rem",
    cursor: "pointer",
  };

/* !!!!Gambiarra!!!! */

  function MouseOver(event) {
    event.target.style.background = '#444444';
  }

  function MouseOut(event){
    event.target.style.background= '#EEEEEE';
  }

/* !!!!Gambiarra!!!! */

  const PrevArrow = (props) => {
    const { onClick, style } = props;

    return (
      <button
        type="button"
        onClick={onClick}
        style={{ ...style, ...stylesPrevArrow }}
        onMouseOver={ MouseOver }
        onMouseOut={ MouseOut }
        >
        <RiArrowLeftSLine className="arrow" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick, style } = props;

    return (
      <button
        type="button"
        onClick={onClick}
        style={{ ...style, ...stylesNextArrow }}
        onMouseOver={ MouseOver }
        onMouseOut={ MouseOut }
      >
        <RiArrowRightSLine className="arrow"/>
      </button>
    );
  };

  return (
    <section className="products">
      <div className="products-container">
        <div className="products__title">
          <h1>DESTAQUES</h1>
        </div>
        <div className="products__carousel">
          <Slider
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            {...settings}
          >
            {products.map(({ id, image, product, price, price_x, extras }) => (
              <div>
                <div className="product-container">
                  <div className="product-extras">
                    <h4>
                      { extras }
                    </h4>
                  </div>
                    { heartProducts(id) }
                  <img className="product-img" src={image} alt={product} />
                  <div className="product-info">
                    <h3 className="product-name">{product}</h3>
                    <h4 className="product-price">{price}</h4>
                    <p className="product-price_x">{price_x}</p>
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
