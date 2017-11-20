import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameOfLife from './components/GameOfLife';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameOfLife rows={10} columns={10} />
      </div>
    );
  }
}

export default App;
