import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Fullscreen from "./components/Fullscreen/Fullscreen";
import Bar from "./components/Bar/Bar";
import Services from "./components/Service/Service";
import Project from "./components/Portfolio/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Sidenav from "./components/Sidenav/Sidenav";
import Backdrow from "./components/Backdrow/Backdrow";

class App extends Component {
  state = {
    sideDrowerOpen: false,
  };

  SidrawerClickHandler = () => {
    const currentState = this.sideDrowerOpen;
    this.setState({ sideDrowerOpen: !currentState });
    console.log("click happened");
  };
  BackdrowerClickHandler = () => {
    this.setState({ sideDrowerOpen: false });
  };
  render() {
    let Backdrower;
    if (this.state.sideDrowerOpen) {
      Backdrower = <Backdrow close={this.BackdrowerClickHandler} />;
    }
    return (
      <div className="app">
        <Nav show={this.SidrawerClickHandler} />
        <Fullscreen />
        <Bar />
        <Services />
        <Project />
        <Contact />
        <Footer />
        <Nav show={this.SidrawerClickHandler} />
        <Sidenav
          open={this.state.sideDrowerOpen}
          close={this.BackdrowerClickHandler}
        />
        {Backdrower}
      </div>
    );
  }
}

export default App;
