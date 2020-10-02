import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Fullscreen from "./components/Fullscreen/Fullscreen";
import Bar from "./components/Bar/Bar";
import Services from "./components/Service/Service";
import Project from "./components/Portfolio/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer"


class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Fullscreen />
        <Bar />
        <Services />
        <Project />
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
