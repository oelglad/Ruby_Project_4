import React, { Component } from 'react';



export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
            <div>
                {this.props.errorText && <p>{this.props.errorText}</p>}
            <form className="Form" onSubmit={(e) => this.props.handleRegister(e, this.state)}>
                <h2>Sign UP!</h2>
                <label htmlfor="name">name</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <label htmlfor="email">email</label>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <label htmlfor="password">password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
            </div>
        )
    }
}