import React, { Component } from 'react';



export default class CreateReservationlList extends Component { 
  constructor(props){
    super(props);
  }

  render(){
    // console.log(this.props.reservations)
  return (
    <div>
      {this.props.reservations && this.props.reservations.map(reservation => (
        <div key={reservation.id}>
          {reservation.reservation_desc}
        </div>
      ))}
    </div>
  )
}
  }
