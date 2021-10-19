import React, { useContext } from 'react';
// import { shape, func, string } from 'prop-types';
import Slider from 'react-slick';
import '../style/carousel.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import Context from '../context/Context';

const classNameExtras = (extras) => {
  if (extras === 'VERÃO 2022') return 'product__extras__verao';
  if (extras === '20% OFF') return 'product__extras__20off';
  if (extras === 'LANÇAMENTO') return 'product__extras__lancamento';
  return 'product__extras';
};

function Carousel() {
  const {
    products, likedProducts, liked, addToCartProvider,
  } = useContext(Context);

  const heartProducts = (id) => {
    const alreadyLiked = liked.includes(id);
    return (
      <button type="button" className="heart" onClick={() => likedProducts(id)}>
        {(alreadyLiked) ? <FaHeart size={30} /> : <FiHeart size={30} />}
      </button>
    );
  };

  const addToCart = (id) => {
    addToCartProvider(id);
  };

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
      },
    ],
  };

  const stylesPrevArrow = {
    backgroundColor: '#CCCCCC',
    border: 'none',
    position: 'absolute',
    left: '-2rem',
    top: '8rem',
    cursor: 'pointer',
    margin: '30px -21px 0 -42px',
    color: 'white',
  };

  const stylesNextArrow = {
    backgroundColor: '#CCCCCC',
    border: 'none',
    position: 'absolute',
    right: '-2rem',
    top: '8rem',
    cursor: 'pointer',
    margin: '30px -42px 0 -42px',
    color: 'white',
  };

  // eslint-disable-next-line react/prop-types
  const PrevArrow = ({ onClick, style }) => (
    <button
      type="button"
      onClick={onClick}
      style={{ ...style, ...stylesPrevArrow }}
    >
      <RiArrowLeftSLine size={50} className="arrow_carousel" />
    </button>
  );

  // eslint-disable-next-line react/prop-types
  const NextArrow = ({ onClick, style }) => (
    <button
      type="button"
      onClick={onClick}
      style={{ ...style, ...stylesNextArrow }}
    >
      <RiArrowRightSLine size={50} className="arrow_carousel" />
    </button>
  );

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
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...settings}
          >
            {products.map(({
              id, image, product, price, pricex, extras,
            }) => (
              <div>
                <div className="product-card">
                  <div className="product-extras">
                    <h4 className={classNameExtras(extras)}>
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
                    <p className="product-price_x">{pricex}</p>
                  </div>
                  <button type="button" onClick={() => addToCart(id)} className="product-comprar">
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

// Slider.propTypes = {
//   PrevArrow: shape({
//     onClick: func,
//     style: shape({
//       display: string,
//     }),
// }.isRequired;

export default Carousel;
