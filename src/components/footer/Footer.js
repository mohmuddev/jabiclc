import React from "react";
import "./Footer.css";
import LogoFooter from "./loofooter.webp";
import Icon from "@mdi/react";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiLinkedin } from '@mdi/js';
import { mdiPinterest } from "@mdi/js";



const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-content">
        <div className="brand">
          <img src={LogoFooter} alt="logoFooter" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            eligendi laboriosam odit corporis possimus, eum fugit ipsam rerum
            facere eveniet, quod fuga suscipit vero itaque repellat! Ipsum,
            animi. Perspiciatis, impedit.
          </p>
        </div>
        <div>
          <h2>
            <span>Quick</span> Links
          </h2>
          <ul>
            <li>Service</li>
            <li>Profile</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Service</li>
          </ul>
        </div>
        <div>
          <h2>
            <span>Contact</span> Info
          </h2>
          <p>Kipora, Farjano Kismayo</p>
          <p>Mon - Sat 7:00 - 18:00</p>
          <p>(252)617-758-011</p>
          <p>info@jabicli.com</p>
        </div>
        <div className="newsletter">
          <h2>
            <span>News</span>letter
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            distinctio,
          </p>
          <div>
            <input type="email" name="" id="" />
            <button>Go</button>
          </div>
          <span className="social">
            <Icon path={mdiFacebook} size={1} />
            <Icon path={mdiTwitter} size={1} />{" "}
            <Icon path={mdiLinkedin} size={1} />{" "}
            <Icon path={mdiPinterest} size={1} />
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p> Copyright &copy; 2020 Jabiclc All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
