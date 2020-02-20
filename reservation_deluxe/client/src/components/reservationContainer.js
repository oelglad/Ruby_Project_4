import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { indexReservations, postReservation, putReservation, verifyUser } from '../services/api_helper';
import ReservationForm from './ReservationForm';



class ReservationContainer extends Component {
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

  componentDidMount() {
    verifyUser();
    this.getAllReservations();
  }


  getAllReservations = async () => {
    const reservations = await indexReservations();
    this.setState({ reservations });
  }


  createReservation = async (id, reservationData) => {
    // console.log(reservationData);
    const newReservation = await postReservation(id, reservationData);
    this.setState({
      reservations: [...this.state.reservations, newReservation]
    })
    this.props.history.push("/hotels/:id/reservations");
  }

  // deleteReservation = async (id, reservationData) => {
  //   // console.log(reservationData);
  //   const deleteReservation = await deleteReservation(id, reservationData);
  //   this.setState({
  //     reservations: [...this.state.reservations, deleteReservation]
  //   })
  //   this.props.history.push("/hotels/:id/reservations");
  // }
  updateReservation = async (id, reservationData) => {
    const updatedReservation = await putReservation(id, reservationData);
    const changedReservations = this.state.hotels.map(hotel => parseInt(hotel.id) === parseInt(id) ? updatedReservation : hotel);
    console.log(changedReservations);
    this.setState({ reservations: changedReservations });
    this.props.history.push("/hotels/:id/reservations");
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* <Route exact path="/hotels/:id/reservations/:id" render={(props) => (
          <SingleReservation
            reservationId={props.match.params.id}
            reservations={this.state.reservations}
          />
        )} /> */}
        <Route exact path="/hotels/:id/reservations" render={(props) => (
          <ReservationForm
            createReservation={this.createReservation}
            hotelId={props.match.params.id}
          />
        )} />
          {/* <Route path="/hotels/:id/reservations/:id" render={(props) => (
          <ReservationForm
          deleteReservation={this.deleteReservation}
            hotelId={props.match.params.id}
          />
        )} /> */}
        {/* <Route path="/hotels/:id/reservations/:id/edit" render={(props) => (
          <UpdateReservationForm
            hotels={this.state.reservations}
            updateReservations={this.updateReservation}
            reservationsId={props.match.params.id}
          />
        )} /> */}
      </div>
    )
  }
}

export default withRouter(ReservationContainer);

