import React, { Component } from "react";
import "./Nav.css";
import Logo from "./jabilogo.webp";
import { MicrophoneIcon } from "react-line-awesome";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Sevices</li>
          <li>Profile</li>
          <li>Porfolio</li>
          <li>Contact</li>
        </ul>
        <div className="cta-menu">
          <MicrophoneIcon />
          <div>
            <span>+25261774850</span> <br />
            <span>info@jabiclc.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
