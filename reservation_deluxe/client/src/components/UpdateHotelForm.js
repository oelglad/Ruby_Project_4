import React, { Component } from 'react';

export default class UpdateHotelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotel_name: ""
    }
  }

  setFormData = () => {
    if (this.props.hotels.length) {
      console.log(this.props.hotels);
      const { hotel_name } = this.props.hotels.find(hotel => {
        return parseInt(hotel.id) === parseInt(this.props.hotelId)
      })
      this.setState({hotel_name})
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
    if (prevProps.hotels !== this.props.hotels) {
      this.setFormData();
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.updateHotel(this.props.hotelId, this.state)
      }}>
        <label className="addHotel" htmlFor="hotel_name">Hotel</label>
        <input
          type="text"
          name="hotel_name"
          value={this.state.hotel_name}
          onChange={this.handleChange}
        />
        <button id="submitButton">Submit</button>
      </form>
    )
  }
}
