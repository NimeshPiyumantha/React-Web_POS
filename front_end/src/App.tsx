import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home/Home';

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="App">
      <Home/>
      </div>
    );
  }
}