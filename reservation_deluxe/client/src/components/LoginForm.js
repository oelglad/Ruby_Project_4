import React, { Component } from 'react';
import {Link } from 'react-router-dom';



export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        })
      }

    render() {
        return (
            <form  className="LoginForm" onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button id="submitButton">Submit</button>
                <Link to="/signup">SignUp</Link>
            </form>
           
        )
    }
}