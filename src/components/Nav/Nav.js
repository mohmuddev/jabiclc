import React, { Component } from "react";
import "./Nav.css";
import Logo from "./jabilogo.webp";
import { MicrophoneIcon } from "react-line-awesome";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { Link } from "react-scroll";

class Nav extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      const nav = document.getElementById("nav");
      const menu = document.querySelectorAll("#nav li");

      menu.forEach((element) => {
        if (isTop > 50) {
          element.classList.add("newMenu");
        }
        if (isTop < 50) {
          element.classList.remove("newMenu");
        }
      });

      if (isTop > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <div className="nav" id="nav">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Profile"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="cta-menu">
          <MicrophoneIcon />
          <div>
            <span>(+252)616-385-966</span> <br />
            <span>hussein@jabiclc.com</span>
          </div>
        </div>
        <Icon
          path={mdiMenu}
          size={1.3}
          color="#F7BD02"
          className="hamburger"
          onClick={this.props.show}
        />
      </div>
    );
  }
}

export default Nav;
