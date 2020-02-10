import React, { Component}from 'react';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
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
