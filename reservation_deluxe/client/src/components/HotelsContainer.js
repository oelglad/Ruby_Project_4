import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { indexHotels, postHotel , putHotel, verifyUser } from '../services/api_helper';
import CreateHotelList from './CreateHotelList';
import SingleHotel from './SingleHotel';
import HotelForm from './HotelForm';
import UpdateHotelForm from './UpdateHotelForm';

class HotelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: []
    }
  }

  componentDidMount() {
    verifyUser();
    this.getAllHotels();
  }

  // READ ALL THE TODOS
  getAllHotels = async () => {
    const hotels = await indexHotels();
    this.setState({ hotels});
  }

  //CREATE THE TODO
  createHotel = async (hotelData) => {
    console.log(hotelData);
    const newHotel = await postHotel(hotelData);
    this.setState({
      hotels: [...this.state.hotels, newHotel]
    })
    this.props.history.push("/hotels");
  }

  // UPDATE THE TODO
  updateHotel = async (id, hotelData) => {
    const updatedHotel = await putHotel(id, hotelData);
    const changedHotels = this.state.hotels.map(hotel => parseInt(hotel.id) === parseInt(id) ? updatedHotel : hotel);
    console.log(changedHotels);
    this.setState({ hotels: changedHotels });
    this.props.history.push("/hotels");
  }

  render() {
    return (
      <div>
        <Route exact path="/hotels" render={() => (
          <CreateHotelList
            hotels={this.state.hotels}
          />
        )} />
        <Route exact path="/hotels/:id" render={(props) => (
          <SingleHotel
            hotelId={props.match.params.id}
            hotels={this.state.hotels}
          />
        )} />
        <Link to="/hotels/new">Add a Hotel</Link>
        <Route path="/hotels/new" render={() => (
          <HotelForm
            createHotel={this.createHotel}
          />
        )} />
        <Route path="/hotels/:id/edit" render={(props) => (
          <UpdateHotelForm
          hotels={this.state.hotels}
            updatehotel={this.updateHotel}
            hotelId={props.match.params.id}
          />
        )} />
      </div>
    )
  }
}

export default withRouter(HotelContainer);
