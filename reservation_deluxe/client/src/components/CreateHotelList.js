import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ReservationContainer from './ReservationContainer';


export default class CreateHotelList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.hotels)
    return (
      <div>
        <Link className="addHotel" to="/hotels/new"><button className="addHotelButton">Add a Hotel To Your List</button></Link>
        <div id="hotel-display">

          {this.props.hotels && this.props.hotels.map(hotel => (
            <div key={hotel.id} className="hotelContainer">
              <Link to={`/hotels/${hotel.id}`}>
                <img className="HotelImg" src={hotel.img_url}></img>
                <p className="hotellName">{hotel.hotel_name}</p>
                <Link to={`/hotels/${hotel.id}/reservations`}></Link>
                {/* <p>{hotel.biography}</p> */}
                <p>{hotel.city}, {hotel.state}, {hotel.zip_code}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
