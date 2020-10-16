import React from "react";
import "./Fullscreen.css";
import Logo from "./fulls-image.webp";

const Fullscreen = () => {
  return (
    <div className="Fullscreen">
      <div className="fullscrn-content">
        <h1>We build your future with construction and Logistics</h1>
        <p>
          If you're looking for an advocate to assist you through construction
          and logistic services, look no further!
        </p>
        <button>View Our Profile</button>
      </div>
      <div className="fullscrn-image">
        <img src={Logo} alt="fulscreenimage" />
      </div>
    </div>
  );
};

export default Fullscreen;
