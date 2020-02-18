import React, { Component } from 'react';

export default class UpdateReservationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservation_desc: ""
    }
  }

  setFormData = () => {
    if (this.props.reservations.length) {
      console.log(this.props.reservations);
      const { reservation_desc } = this.props.reservations.find(reservation => {
        return parseInt(reservation.id) === parseInt(this.props.reservationId)
      })
      this.setState({reservation_desc})
    }
  }

  componentDidMount() {
    this.setFormData();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reservations !== this.props.reservations) {
      this.setFormData();
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.updateHotel(this.props.reservationId, this.state)
      }}>
        <label htmlFor="reservation_desc">Hotel</label>
        <input
          type="text"
          name="reservation_desc"
          value={this.state.reservation_desc}
          onChange={this.handleChange}
        />
        <button id="submitButton">Submit</button>
      </form>
    )
  }
}
