import React, { Component}from 'react';
import { registerUser, verifyUser, loginUser } from './services/api_helper';
import { Route, Link, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Overview  from './components/Overview';
import Reservation from './components/ReservationContainer';
import ReservationContainer from './components/ReservationContainer';
import HotelContainer from './components/HotelsContainer';
// import HotelCarousel from './components/Carousel';
import './App.css';
import SignUpForm from './components/SignUpForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: ""
    }
  }

  handleRegister = async (e,  registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    console.log(currentUser)
  if (!currentUser.errorMessage){
    this.setState({ currentUser});
    // this.props.history.push('/reservations');
  } else {
    this.setState({errorText: currentUser.errorMessage})
  }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    // this.props.history.push('/reservations');
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
      const user = {name, email};
      user && this.setState({
        currentUser: user
      })
    }
  }
  render(){
  return (
    <div className="App">
        {this.state.currentUser ?
          <div>
            <h1>Hello, {this.state.currentUser.name}</h1>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
          :
          <nav>
            <Link to="/signup">SignUp</Link>
          </nav>
        }
        <Route path="/login" render={() => (
          <LoginForm
          handleLogin={this.handleLogin}
          />
        )} />
        <Route path="/signup" render={() => (
          <SignUpForm
          handleRegister={this.handleRegister}
          errorText={this.state.errorText}
          />
        )} />
        <Header
         currentUser={this.state.currentUser}
         handleLogout={this.handleLogout}
         handleLogin={this.handleLogin}
         />
        <Route path="/overview" render={() => (<Overview />)} />
        <Route path="/reservation"  render={() => (<ReservationContainer />)} />
        <Route path="/hotels" render={() => (<HotelContainer />)} />
        {/* <Route path="/hotels" render={() => (<ReservationContainer />)} /> */}
        <Route path="/hotels" render={() => (<Home />)} />
        {/* <HotelCarousel />  */}

    </div>
  );
}
}
export default withRouter(App);
