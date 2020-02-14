import React, { Component } from 'react';

export default class ReservationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservation_desc: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.createReservation(this.state)
      }}>
        <label htmlFor="reservation_desc">Reservation</label>
        <input
          type="text"
          name="reservation_desc"
          value={this.state.reservation_desc}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
