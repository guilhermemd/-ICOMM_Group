import React, { useContext } from 'react';
import Context from '../context/Context';

import Slider from "react-slick";
import "../style/carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiHeart} from "react-icons/fi";
import { FaHeart } from 'react-icons/fa'

const classNameExtras = (extras) => {
  if(extras === 'VERÃO 2022') return 'prduct__extras__verao';
  if(extras === '20% OFF') return 'prduct__extras__20off';
  if(extras === 'LANÇAMENTO') return 'prduct__extras__lancamento';
}

function Carousel() {
  const { products, likedProducts, liked, addToCartProvider, cart } = useContext(Context);
  
  console.log(cart, "carrossel");
const heartProducts = (id) => {
  const alreadyLiked = liked.includes(id);
  return (
    <button className="heart" onClick={() => likedProducts(id)} >
      {(alreadyLiked) ? <FaHeart size={30} /> : <FiHeart size={30} />}
    </button>
  )
}

const addToCart = (id) => {
  addToCartProvider(id);
}

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: false,
          prevArrow: false,
        },
      } 
    ]    
  };

  const stylesPrevArrow = {
    backgroundColor: "#CCCCCC",
    border: "none",
    position: "absolute",
    left: "-2rem",
    top: "8rem",
    cursor: "pointer",
    margin: "30px -21px 0 -42px",
    color: "white",
  };

  const stylesNextArrow = {
    backgroundColor: "#CCCCCC",
    border: "none",
    position: "absolute",
    right: "-2rem",
    top: "8rem",
    cursor: "pointer",
    margin: "30px -42px 0 -42px",
    color: "white",
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
        <RiArrowLeftSLine size={50} className="arrow" />
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
        <RiArrowRightSLine size={50} className="arrow"/>
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
                <div className="product-card">
                  <div className="product-extras">
                    <h4 className={ classNameExtras(extras) }>
                      { extras }
                    </h4>
                    { heartProducts(id) }
                  </div>
                  <div className="product-imgAndname">
                    <img className="product-img" src={image} alt={product} />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product}</h3>
                    <h4 className="product-price">{price}</h4>
                    <p className="product-price_x">{price_x}</p>
                  </div>
                  <button onClick={() => addToCart(id) } className="product-comprar">
                    <div className="comprar">COMPRAR</div>
                  </button>
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
