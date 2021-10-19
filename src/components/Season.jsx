import React from 'react';
import summer from '../images/image-5.png';
import blanc from '../images/image-6.png';
import '../style/season.css';

function Season() {
  return (
    <section className="season">
      <section className="season__container">
        <div className="season__left__box">
          <img
            src={summer}
            alt="summer-collection"
            className="season__img__left"
          />
          <div className="season__left__text">
            <h4>ÍRIS</h4>
            {' '}
            <h4>VERÃO</h4>
            {' '}
            <h4>2022</h4>
          </div>
        </div>
        <div className="season__right__box">
          <img
            src={blanc}
            alt="blanc-collection"
            className="season__img__right"
          />
          <div className="season__right__text">
            <h4>LE LIS</h4>
            {' '}
            <h4>BLANC</h4>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Season;
