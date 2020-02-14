import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CreateHotelList extends Component { 
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.hotels)
  return (
    <div>
      {this.props.hotels && this.props.hotels.map(hotel => (
        <div key={hotel.id}>
          <Link to={`/hotels/${hotel.id}`}>{hotel.hotel_name}</Link>
        </div>
      ))}
    </div>
  )
}
  }
