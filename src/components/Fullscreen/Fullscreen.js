import React from "react";
import "./Fullscreen.css";
import Logo from "./fulls-image.webp";

const Fullscreen = () => {
  return (
    <div className="Fullscreen">
      <div className="fullscrn-content">
        <h1>We build your future with construction and Logistics</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque,
          cupiditate quod, beatae neque magni quam dignissimos nam
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
