// SlickSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slide'
import './courseslider.css'


const CourseSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display three slides at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500,
  };

  return (
    <center >
    <div className="slick-slider">
      <Slider {...settings}>
         
          <Slide/>
          <Slide/>
          <Slide/>
          <Slide/>
        
      </Slider>
    </div>
    </center>
  );
};

export default CourseSlider;
