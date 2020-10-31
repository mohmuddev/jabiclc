import React from "react";
import "./Sidenav.css";
import SlideLogo from "./logo192.webp";
import { Link } from "react-scroll";
import { MicrophoneIcon } from "react-line-awesome";
const Sidedrow = (props) => {
  let siderawClasses = "side-Drawer";
  if (props.open) {
    siderawClasses = "side-Drawer open";
  }
  return (
    <div className={siderawClasses}>
      <div className="slide-header">
        <a href="http://mohamud.dev" className="logo-container">
          <img src={SlideLogo} alt="logo" />
        </a>
      </div>
      <nav>
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
      </nav>
      <div className="cta-menu-2">
        <MicrophoneIcon />
        <div>
          <span>(+252)616-37-37-01</span> <br />
          <span>hussein@jabiclc.com</span>
        </div>
      </div>
    </div>
  );
};

export default Sidedrow;
