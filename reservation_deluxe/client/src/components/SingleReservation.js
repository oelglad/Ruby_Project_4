import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleReservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentReservation: null
    }
  }

  setCurrenteservation = () => {
    const currentReservation = this.props.Reservations.find(reservation => reservation.id === parseInt(this.props.reservationId));
    this.setState({ currentReservation })
  }

  componentDidMount() {
    this.setCurrentReservation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reservationId !== this.props.reservationId) {
      this.setCurrentReservation();
    }
  }

  render() {
    return (
      <div>
        {this.state.currentReservation && (
          <>
            <h1>{this.state.currentReservation.reservation_desc}</h1>
            <Link to={`/reservations/${this.state.currentReservation.id}/edit`}><button>Edit</button></Link>
          </>
        )}
      </div>
    )
  }
}
