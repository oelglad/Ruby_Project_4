import React, { Component } from "react";
import HotelCarousel from './Carousel';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
  }
  }
  render() {
    return (
        <div>
            <HotelCarousel />
        </div>
        
    );
  }
}

export default Home;