// import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
// import { indexReservations } from '../services/api_helper';

// export default class SingleReservation extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentReservation: null,
    

//     }
//   }

//   // setCurrenteservation = async () => {
//   //   const currentReservation = this.props.Reservations.find(reservation => reservation.id === parseInt(this.props.reservationId));
//   //   this.setState({ currentReservation })
//   // }

//   setCurrenteservation  = async () => {
//   }
//   // componentDidMount = async () => {
//   //   this.setCurrentReservation();
//   // }
//   componentDidMount = async () => {
//     if (this.props.reservations.length > 0) {
//       const currentReservation = this.props.reservations.find(reservation => parseInt(reservation.id) === parseInt(this.props.reservationId));
//       const updateReservations = await putReservation(currentReservation.id);
//       console.log(updateReservation)
//       this.setState({ 
       
//         currentReservation: updateReservations
//       });
//     }
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.reservationId !== this.props.reservationId) {
//       this.setCurrentReservation();
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.currentReservation && (
//           <>
//             <h1>{this.state.currentReservation.reservation_desc}</h1>
//             <Link to={`/hotels/${this.props.hotelId}/reservations/${this.state.currentReservation.id}/edit`}><button>Edit</button></Link>
            
//           </>
//         )}
//       </div>
//     )
//   }
// }
