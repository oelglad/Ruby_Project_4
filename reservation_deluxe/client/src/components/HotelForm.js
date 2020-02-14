import React, { Component } from 'react';


export default class HotelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotel_name: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.createHotel(this.state)
      }}>
        <label htmlFor="hotel_name">Hotel</label>
        <input
          type="text"
          name="hotel_name"
          value={this.state.hotel_name}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
      </div>
    )
  }
}
