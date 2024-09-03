import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/css/c-carrusel.css"; 

import pic2 from '../images/ffuente.jpg';
import pic3 from '../images/ffuente.jpg';
import pic4 from '../images/ffuente.jpg';
import pic5 from '../images/ffuente.jpg';
import pic6 from '../images/ffuente.jpg';
import pic7 from '../images/ffuente.jpg';

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={pic2} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={pic3} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={pic4} alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={pic5} alt="Slide 4" />
        </div>
        <div className="slide">
          <img src={pic6} alt="Slide 5" />
        </div>
        <div className="slide">
          <img src={pic7} alt="Slide 6" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
