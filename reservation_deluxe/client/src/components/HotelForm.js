import React, { Component } from 'react';


export default class HotelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels :[{
      hotel_name: "",
      city: "",
      state: "",
      zip_code: "",
      biography: "",
      img_url: ""
    }]
  }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div >
      <form className="hotelForm"  onSubmit={(e) => {
        e.preventDefault();
        this.props.createHotel(this.state)
      }}>
        <label htmlFor="hotel_name">Hotel name</label>
        <input
          type="text"
          name="hotel_name"
          value={this.state.hotel_name}
          onChange={this.handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this.handleChange}
        />
        <label htmlFor="zip_code">Zip-code</label>
        <input
          type="text"
          name="zip_code"
          value={this.state.zip_code}
          onChange={this.handleChange}
        />
        <label htmlFor="biography">Biography</label>
        <input
          type="text"
          name="biography"
          value={this.state.biography}
          onChange={this.handleChange}
        />
         <label htmlFor="img_url">img_url</label>
        <input className="HotelImg" 
          type="text"
          name="img_url"
          value={this.state.img_url}
          onChange={this.handleChange}
        />
        <button id="submitButton">Submit</button>
      </form>
      </div>
    )
  }
}
