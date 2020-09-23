import React, { Component } from "react";
import "./Nav.css";
import Logo from "./jabilogo.webp";


class Nav extends Component{
    render(){
        return(
            <div className="nav">
                <div className="logo">
                <img src={Logo} alt="Logo"/>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Sevices</li>
                    <li>Profile</li>
                    <li>Porfolio</li>
                    <li>Contact</li>
                </ul>
                <div className="cta-menu">
                    <i>icon</i>
                    <div>
                        <span>+25261774850</span> <br/>
                       <span>hussein@jabiclc.com</span>
                  </div>
                </div>
            </div>
        );
    }
}
 
export default Nav;