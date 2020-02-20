import React, { Component } from "react";
import { Link , Route} from "react-router-dom";
import LoginForm from './LoginForm';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="header">

  <img className="logo" src="https://i.imgur.com/lrEC5HI.jpg"></img>
        <nav>
              <Link to="/home">Home</Link>
              <Link to="/overview">Overview</Link>
              <Link to="/login">Login/SignUp</Link> 
             
        </nav> 
      </div>
    );
  }
}
export default Header;
