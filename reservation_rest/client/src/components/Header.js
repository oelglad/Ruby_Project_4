import React, { Component } from "react";
import { Link } from "react-router-dom";


// import CreateJob from "./createJob";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      username: "",
      password: ""
    };
  }

  handleRegister = e => {
    e.preventDefault();
    this.setState({
      register: true
    });
  };

  handleBack = e => {
    e.preventDefault();
    this.setState({
      register: false
    });
  };

  render() {
    return (
      <div className="header">
       
        <nav>
          <div>
          <ul>
          <li className="left"><Link to="/home">Home</Link></li>
          <li className="left"><Link to="/reservation">Reservation</Link></li>
          <li className="left"><Link to="/about">About</Link></li>
          {/* <Link to="/login">Login / Register</Link> */}

          {this.props.currentUser ? (
            <div>
              <Link to="/reservation">Reservation</Link>
              <button onClick={this.props.handleLogout}>Logout</button>
            </div>
          ) : (
            <div></div>
           
            )}
         </ul>
        </div>
        </nav>
      </div>
    );
  }
}
export default Header;
