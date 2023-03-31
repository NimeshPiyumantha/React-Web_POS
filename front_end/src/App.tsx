import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Header from './component/Header/Header';

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Header/>
      <Home/>
      </div>
    );
  }
}