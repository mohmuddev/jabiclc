import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Fullscreen from "./components/Fullscreen/Fullscreen";
import Bar from "./components/Bar/Bar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Fullscreen />
        <Bar />
      </div>
    );
  }
}

export default App;
