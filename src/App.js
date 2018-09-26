import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './TeamList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tourney</h1>
        </header>

        <TeamList />
      </div>
    );
  }
}

export default App;
