import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import Content from "./component/Content/Content";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Content/>
      </div>
    );
  }
}
