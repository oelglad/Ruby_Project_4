import React, { Component } from "react";
import {Route, Link } from 'react-router-dom';
import HotelCarousel from './Carousel';
import HotelContainer from './HotelsContainer';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
  }
  }
  render() {
    return (
        <div>
          {/* <h1>{this.state.props.currentHotel.hotel_name}</h1> */}
            <HotelCarousel />
            {/* <Route path="/hotels" render={() => (<HotelContainer />)} /> */}
            {/* <HotelContainer /> */}
        </div>
        
    );
  }
}

export default Home;