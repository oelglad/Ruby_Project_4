import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { indexHotels, postHotel , putHotel, verifyUser } from '../services/api_helper';
import CreateHotelList from './CreateHotelList';
import SingleHotel from './SingleHotel';
import HotelForm from './HotelForm';


class HotelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [{
      hotel_name: "",
      city: "",
      state: "",
      zip_code: "",
      biography: "",
      img_url: ""
      }]
    }
  }

  componentDidMount() {
    verifyUser();
    this.getAllHotels();
  }

  getAllHotels = async () => {
    const hotels = await indexHotels();
    this.setState({ hotels});
  }

  createHotel = async (hotelData) => {
    console.log(hotelData);
    const newHotel = await postHotel(hotelData);
    this.setState({
      hotels: [...this.state.hotels, newHotel]
    })
    this.props.history.push("/hotels");
  }

  // updateHotel = async (id, hotelData) => {
  //   const updatedHotel = await putHotel(id, hotelData);
  //   const changedHotels = this.state.hotels.map(hotel => parseInt(hotel.id) === parseInt(id) ? updatedHotel : hotel);
  //   console.log(changedHotels);
  //   this.setState({ hotels: changedHotels });
  //   this.props.history.push("/hotels");
  // }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/hotels" render={() => (
            <CreateHotelList
              hotels={this.state.hotels}
            />
          )} />
          <Route exact path="/hotels/new" render={() => (
            <HotelForm
              createHotel={this.createHotel}
            />
          )} />
          <Route exact path="/hotels/:id" render={(props) => (
            <SingleHotel
              hotelId={props.match.params.id}
              hotels={this.state.hotels}
            />
            
          )} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(HotelContainer);
