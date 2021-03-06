import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 class HotelCarousel extends Component {


  render() {
    return (
      <Carousel showThumbs={false} infiniteLoop={true} emulateTouch showStatus={false} swipeable={true} autoPlay={true} dynamicHeight={true} useKeyboardArrows={true} centerMode={false} transitionTime={300}>
        <div className="carousel-img">
          <img src="https://i.imgur.com/Fpv3xwr.jpg" alt="hotel1" />
        </div>
        <div className="carousel-img">
          <img src="https://i.imgur.com/0XgueCm.jpg" alt="hotel1" />
        </div>
        <div className="carousel-img">
          <img src="https://i.imgur.com/KVU0vm0.jpg" alt="hotel2" />
        </div>
        <div className="carousel-img">
          <img src="https://i.imgur.com/FmDrDXG.jpg" alt="hotel3" />
        </div> 
        <div className="carousel-img">
          <img src="https://i.imgur.com/aD13Ssk.jpg" alt="hotel3" />
        </div> 
        <div className="carousel-img">
          <img src="https://i.imgur.com/2V9odP2.jpg" alt="hotel3" />
        </div> 
       
      </Carousel>
    );
  }
};

export default HotelCarousel ;