import React, { Component}from 'react';
import { LoginUser, registerUser, verifyUser } from './services/api_helper';
import Home from './components/Home';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import './App.css';
import { verifyUser } from './services/api_helper';

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
  }
  render(){
  return (
    <div className="App">
    <Header />
     <Home />
    </div>
  );
}
}
export default App;
