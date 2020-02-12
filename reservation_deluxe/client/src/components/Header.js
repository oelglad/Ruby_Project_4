import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Overview from './Overview';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      currentUser: null,
      username: "",
      password: ""
    };
  }
  // handleLogin = async (e, loginData) => {
  //   e.preventDefault();
  //   const currentUser = await loginUser(loginData);
  //   this.setState({ currentUser });
  //   this.props.history.push('/reservations');
  // }
  // handleRegister = e => {
  //   e.preventDefault();
  //   this.setState({
  //     signUp: true
  //   });
  // };

  handleBack = e => {
    e.preventDefault();
    this.setState({
      signUp: false
    });
  };

  render() {
    return (
      <div className="header">
        {this.state.currentUser ?
          <div>
            <h1>Hello, {this.state.currentUser.name}</h1>
            <button onClick={this.props.handleLogout}>Logout</button>
        </div>   
        :
        <div></div>
  }
        <nav>
          <div>
            <ul>
              <li className="left"><Link to="/Home">Home</Link></li>
              <li className="left"><Link to="/Reservation">Reservation</Link></li>
              <li className="left"><Link to="/Overview">Overview</Link></li>

              {/* {this.props.currentUser ? (
                <div>
                  <Link to="/reservation">Reservation</Link>
                  <button onClick={this.props.handleLogout}>Logout</button>
                </div>
              ) : (
                  <div></div>
                )}
              {!this.state.register ? (
                <li className="right"><LoginForm
                  handleRegister={this.props.handleRegister}
                  handleLogin={this.props.handleLogin}
                />
                </li>
              ) : (
                  <li className="right"><SignUpForm
                    handleBack={this.handleBack}
                  />
                  </li>
                )}
              {this.props.currentUser ? (
                <div>
                  <p className="welcome">Hello .
                {this.props.currentUser.username}</p>
                  <li className="right"><Link to="/reservation">Make a Reservation</Link></li>

                  <li className="right"><button onClick={this.props.handleLogout}>Logout</button></li>
                </div>
              ) : (
                  <div></div>

                )}*/}
            </ul>
          </div>
        </nav> 
      </div>
    );
  }
}
export default Header;
