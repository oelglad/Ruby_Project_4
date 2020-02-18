import React, { Component } from 'react';
import { registerUser, verifyUser, loginUser, postReservation } from './services/api_helper';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import Overview from './components/Overview';
import ReservationContainer from './components/ReservationContainer';
import HotelContainer from './components/HotelsContainer';
import './App.css';
import SignUpForm from './components/SignUpForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: ""
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    console.log(currentUser)
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push('/hotels');
    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    this.props.history.push('/hotels');
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem('authToken')) {
      const name = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      const user = { name, email };
      console.log(user);
      user && this.setState({
        currentUser: user

      })
    }
  }

  // createReservation = async (id, reservationData) => {
  //   // console.log(reservationData);
  //   const newReservation = await postReservation(id, reservationData);
  //   this.setState({
  //     reservations: [...this.state.reservations, newReservation]
  //   })
  //   this.props.history.push("/hotels/:id/reservations");
  // }

  render() {

    return (

      <div className="App">
        <>
          <Header />

          <Route path="/home" render={() => (<Home />)} />
          <Route path="/login" render={() => (
            <LoginForm
              handleLogin={this.handleLogin}
            />
          )} />
          {this.state.currentUser ?
            <div>
              <h3>Hello, {this.state.currentUser.name}</h3>
              <button onClick={this.handleLogout} id="logoutButton">Logout</button>
              <Link className="addHotel" to="/hotels">Hotels</Link>
              <Route path="/hotels" render={() => (<HotelContainer />)} />
              <ReservationContainer />
            </div>
            :
            <div>
              <Route path="/signup" render={() => (
                <SignUpForm
                  handleRegister={this.handleRegister}
                  errorText={this.state.errorText}
                />
              )} />
            </div>
          }
          {/* <Route path="/overview" render={() => (<Overview />)} /> */}
          {/* <Route path="/hotels/:id/reservations" render={() => (
            <ReservationForm
              createReservation={this.createReservation}
            />)} /> */}
          <Overview />
          <Footer />
        </>
      </div>
    );
  }
}
export default withRouter(App);
