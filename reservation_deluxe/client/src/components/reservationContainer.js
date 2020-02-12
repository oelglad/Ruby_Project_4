import React, { Component} from 'react';



export default class Reservation extends Component{
constructor(props){
    super(props);
    this.state={
        location: ["NYC", "Italy", "Egypt"],
        date: ""
    }
}
render(){
    return(
        <div>
             <form className="reservationForm" onSubmit={(e) => this.props.handleLogin(e, this.state)}>
            <h3>Book unique places to stay and things to do.</h3>
            <label htmlfor="Where?">Where</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.location}
                    onChange={this.props.handleChange}
                />
               <label htmlfor="">Check-In</label>
                <input
                    type="date"
                    name="date"
                    value={this.state.date}
                />
                 <label htmlfor="">Check-Out</label>
                <input
                    type="date"
                    name="date"
                    value={this.state.date}
                />
            </form>
        </div>
    )
}


}