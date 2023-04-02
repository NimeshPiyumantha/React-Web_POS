import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}
