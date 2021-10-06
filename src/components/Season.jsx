import React from 'react';
import { ImageBackground } from 'react-native';
import summer from '../images/image-5.png';
import blanc from '../images/image-6.png';
import '../style/season.css';


function Season() {
  return (
    <section className="season">
      <ImageBackground source={ require(summer)} >
      <div className="season__left__text">
        <h4>ÍRIS</h4> <h4>VERÃO</h4> <h4>2022</h4>
      </div>
      </ImageBackground>  
      {/* <div className="img_left">
        <img 
          src={ summer }
          alt="summer-collection"
          className="season__img1"
        >
        </img> */}
      {/* </div> */}
      <div className="img_right">
        <img 
          src={ blanc }
          alt="blanc-collection"
          className="season__img2"
        >
        </img>
      </div>
        <div className="season__right__text">  
          <h4>LE LIS</h4> <h4>BLANC</h4>
        </div>
    </section>
  );
}

export default Season;