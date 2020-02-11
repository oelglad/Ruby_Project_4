import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


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
          <li className="left"><Link to="/overview">Overview</Link></li>
          
          {this.props.currentUser ? (
            <div>
              <Link to="/reservation">Reservation</Link>
              <button onClick={this.props.handleLogout}>Logout</button>
            </div>
          ) : (
            <div></div>
            )}
            {!this.state.register ?  (
              <li className="right"><LoginForm
              handleRegister={this.handleRegister}
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
                <li className="right"><Link to="/reservation">Post Jobs</Link></li>

                <li className="right"><button onClick={this.props.handleLogout}>Logout</button></li>
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
