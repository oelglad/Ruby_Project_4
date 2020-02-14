import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { indexReservations } from '../services/api_helper';

export default class SingleHotel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHotel: null,
      reservations: [],
      hotel_name: ""

    }
  }

  setCurrentHotel = async () => {
  }

  componentDidMount = async () => {
    if (this.props.hotels.length > 0) {
      const currentHotel = this.props.hotels.find(hotel => hotel.id === parseInt(this.props.hotelId));
      const reservations = await indexReservations(currentHotel.id);
      this.setState({ 
        reservations,
        currentHotel
      });
    // }else{
    //   const newHotel = await this.props.createHotel(this.state.hotel_name);
    //  this.setState({
    //    currentHotel: newHotel
    //  })
        
    
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hotelId !== this.props.hotelId) {
      this.setCurrentHotel();
    }
  }

  render() {
    return (
      <div>
        {this.state.currentHotel && (
          <>
            <h1>{this.state.currentHotel.hotel_name}</h1>
            <Link to={`/hotels/${this.state.currentHotel.id}/edit`}><button>Edit</button></Link>
            {this.state.reservations && this.state.reservations.map(reservation =>
              <p>{reservation.reservation_desc}</p>
            )}
          </>
        )}
      </div>
    )
  }
}
