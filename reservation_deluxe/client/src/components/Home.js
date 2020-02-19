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
            <HotelCarousel />
            {/* <Route path="/hotels" render={() => (<HotelContainer />)} /> */}
            <Link className="addHotel" to="/hotels">Hotels</Link>
        </div>
        
    );
  }
}

export default Home;