import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { indexReservations, deleteReservation, putReservation } from '../services/api_helper';
import UpdateReservationForm from './ReservationForm';


export default class SingleHotel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHotel: null,
      reservations: [],
      hotel_name: "",
      test: false

    }
  }

  setCurrentHotel = async () => {
  }

  componentDidMount = async () => {
    if (this.props.hotels.length > 0) {
      const currentHotel = this.props.hotels.find(hotel => parseInt(hotel.id) === parseInt(this.props.hotelId));
      console.log(currentHotel);
      const reservations = await indexReservations(this.props.hotelId);
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

  deleteRes = async (formData) => {
    console.log(formData)
    let reservation_id = formData.id
    let hotel_id = formData.hotel_id
    console.log(reservation_id)
    let resp = await deleteReservation(reservation_id, hotel_id)
  }
  updateRes = async (formData) => {
    console.log(formData)
    let reservation_id = formData.id
    let hotel_id = formData.hotel_id
    console.log(reservation_id)
    let resp = await putReservation(hotel_id, reservation_id, formData)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.hotelId !== this.props.hotelId) {
      this.setCurrentHotel();
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        {this.state.currentHotel && (
          <>
            <h1>{this.state.currentHotel.hotel_name}</h1>
            <h4>Your Reservation List </h4>
            <Link to={`/hotels/${this.state.currentHotel.id}/Add`}>
            </Link>
            {this.state.reservations && this.state.reservations.map(reservation =>
              <div>
                <p>{reservation.reservation_desc}</p>
                <button onClick={() => this.deleteRes(reservation)}>DELETE</button>
                {/* <a className="updateRes" href={`/hotels/${this.props.hotelId}/reservations`}> */}
                {/* <button onClick={()=> this.updateRes(reservation)}>UPDATE</button> */}
                {/* </a> */}
                {/* <Link to={`/hotels/${this.props.hotelId}/reservations`}>UPDATE</Link> */}
                {/* <Link className="makeRes" to={`/hotels/${this.props.hotelId}/reservations`}>Update Reservation */}
               <button onClick={() => this.updateRes(reservation)}>
                 <Link className="makeRes" to={`/hotels/${this.props.hotelId}/reservations/${reservation.reservation_id}`}>Update Reservation</Link></button>
               {/* </Link> */}
              </div>
            )}

            <Link className="makeRes" to={`/hotels/${this.props.hotelId}/reservations`}>Create Reservation</Link>
            {/* <Link className="makeRes" to={`/hotels/${this.props.hotelId}/reservations/${this.props.id}`}>Delete Reservation</Link> */}

            {/* )} /> */}
          </>

        )}
      </div>
    )
  }
}
