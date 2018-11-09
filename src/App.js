import React, { Component } from 'react';
//import './App.css';
import IdeasContainer from './components/IdeasContainer';
import NavBar from './components/Navbar';
import SimpleCard from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <IdeasContainer />
        <SimpleCard />
      </div>
    );
  }
}

export default App;
