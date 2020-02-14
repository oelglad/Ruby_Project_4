import React, { Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import {indexReservations, postReservation , putReservation, verifyUser } from '../services/api_helper';
import CreateReservationList from './CreateReservationList';
import SingleReservation from './SingleReservation';
import ReservationForm from './ReservationForm';
import UpdateReservationForm from './UpdateReservationForm';


class ReservationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    verifyUser();
    this.getAllReservations();
  }

  // READ ALL THE TODOS
  getAllReservations = async () => {
    const reservations = await indexReservations();
    this.setState({ reservations});
  }

  //CREATE THE TODO
  createReservation = async (reservationData) => {
    console.log(reservationData);
    const newReservation = await postReservation(reservationData);
    this.setState({
      hotels: [...this.state.reservations, newReservation]
    })
    this.props.history.push("/hotels/:id/reservations");
  }

  // UPDATE THE TODO
  updateHotel = async (id,reservationData) => {
    const updatedReservation = await putReservation(id, reservationData);
    const changedReservations = this.state.hotels.map(hotel => parseInt(hotel.id) === parseInt(id) ? updatedReservation : hotel);
    console.log(changedReservations);
    this.setState({ reservations: changedReservations});
    this.props.history.push("/hotels/:id/reservations");
  }

  render() {
    return (
      <div>
        <Route exact path="/hotels/:id/reservations" render={() => (
          <CreateReservationList
            reservations={this.state.reservations}
          />
        )} />
        <Route exact path="/hotels/:id/reservations/:id" render={(props) => (
          <SingleReservation
          reservationId={props.match.params.id}
          reservations={this.state.reservations}
          />
        )} />
        <Route path="/hotels/:id/reservations/new" render={() => (
          <ReservationForm
            createReservation={this.createReservation}
          />
        )} />
        <Route path="/hotels/:id/reservations/:id/edit" render={(props) => (
          <UpdateReservationForm
          hotels={this.state.reservations}
            updateReservations={this.updateReservation}
            reservationsId={props.match.params.id}
          />
        )} />
      </div>
    )
  }
}

export default withRouter(ReservationContainer);

// export default class Reservation extends Component{
// constructor(props){
//     super(props);
//     this.state={
//         locations: ["NYC", "Italy", "Egypt"],
//         date: ""
//     }
// }
// render(){
//     return(
//         <div>
//              <form className="reservationForm" onSubmit={(e) => this.props.handleLogin(e, this.state)}>
//             <h3>Book unique places to stay and things to do.</h3>
//             <label htmlfor="Where?">Where</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={this.state.locations[0]}
//                     onChange={this.props.handleChange}
//                 />
//                <label htmlfor="">Check-In</label>
//                 <input
//                     type="date"
//                     name="date"
//                     value={this.state.date}
//                 />
//                  <label htmlfor="">Check-Out</label>
//                 <input
//                     type="date"
//                     name="date"
//                     value={this.state.date}
//                 />
//             </form>
//         </div>
//     )
// }


// }