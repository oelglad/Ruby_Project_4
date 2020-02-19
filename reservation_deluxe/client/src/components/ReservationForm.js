import React, { Component } from 'react';
import SingleHotel from './SingleHotel';

export default class ReservationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservations: [{
        reservation_desc: "",
        room_type: "",
        guest_no: "",
        start_date: "",
        end_date: ""
      }]
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.props);
    return (
      <form className="reservationForm" onSubmit={(e) => {
        e.preventDefault();
        this.props.createReservation(this.props.hotelId, this.state)
        // this.props.deleteReservation(this.props.hotelId, this.state)
      }}>
        <label htmlFor="reservation_desc">Reservation</label>
        <input
          type="text"
          name="reservation_desc"
          value={this.state.reservation_desc}
          onChange={this.handleChange}
        />
        <label htmlFor="room_type">Room_Type</label>
        <input
          type="text"
          name="room_type"
          value={this.state.room_type}
          onChange={this.handleChange}
        />
        <label htmlFor="guest_no">Room Guest</label>
        <input
          type="text"
          name="guest_no"
          value={this.state.guest_no}
          onChange={this.handleChange}
        />
        <label htmlFor="start_date">Start-Date</label>
        <input
          type="date"
          name="start_date"
          value={this.state.start_date}
          onChange={this.handleChange}
        />
         <label htmlFor="end_date">End-Date</label>
        <input
          type="date"
          name="end_date"
          value={this.state.end_date}
          onChange={this.handleChange}
        />
        <button id="submitButton">Submit</button>
      </form>
    )
  }
}
