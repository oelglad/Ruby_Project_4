import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import HotelCarousel from './Carousel';
import HotelContainer from './HotelsContainer';
import { indexHotels } from '../services/api_helper';
// import Overview from './Overview';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // hotels: [{
      //   hotel_name: "NYC Hotel",
      //   city: "NYC",
      //   state: "NYC",
      //   zip_code: "0004",
      //   biography: "",
      //   img_url: "https://i.imgur.com/JUrPJiF.jpgcd "
      // },
      // {
      //   hotel_name: "Marriott",
      //   city: "Naples",
      //   state: "NYC",
      //   zip_code: "0004",
      //   biography: "",
      //   img_url: "https://i.imgur.com/JUrPJiF.jpgcd "
      // },
      // {
      //   hotel_name: "NYC Hotel",
      //   city: "NYC",
      //   state: "NYC",
      //   zip_code: "0004",
      //   biography: "",
      //   img_url: "https://i.imgur.com/JUrPJiF.jpgcd "
      // }]
      hotels: []
    }

  }
  componentDidMount() {
    this.getAllHotels();
  }

  getAllHotels = async () => {
    const hotels = await indexHotels();
    this.setState({ hotels });
  }
  render() {
    return (
      <div>
        <HotelCarousel />
        <div id="hotel-display">
          {this.state.hotels.map(hotel => (
            <div key={hotel.id} className="hotelContainer">
               {/* <Link to={`/hotels/${hotel.id}`}>  */}
                <img className="HotelImgH" src={hotel.img_url}></img>
                <p className="hotellName">{hotel.hotel_name}</p>
                {/* <Link to={`/hotels/${hotel.id}/reservations`}></Link> */}
                {/* <p>{hotel.biography}</p> */}
                <p>{hotel.city}, {hotel.state}, {hotel.zip_code}</p>
              {/* </Link> */}
            </div>
          ))}
        </div> 
      </div>

    );
  }
}

export default Home;