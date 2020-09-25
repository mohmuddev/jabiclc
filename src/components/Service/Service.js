import React from "react";
import "./Service.css";
import { EditIcon } from "react-line-awesome";
import { MicrophoneIcon } from "react-line-awesome";
import { BuildingIcon } from "react-line-awesome";
import { TruckIcon } from "react-line-awesome";
import { TruckLoadingIcon } from "react-line-awesome";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

const Services = () => {
  return (
    <div className="Service">
      <h2>
        Our core <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services">
          <EditIcon />
          <div>
            <h3>Drawing and Ideation</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              minus vitae cum quia quisquam pariatur dolorem eaque vel non
              facilis doloremque.
            </p>
          </div>
        </div>
        <div className="services service-middle">
          <BuildingIcon />
          <div>
            <h3>Construction and Building</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              minus vitae cum quia quisquam pariatur dolorem eaque vel non
              facilis doloremque.
            </p>
          </div>
        </div>
        <div className="services">
          <Icon path={mdiAccount} color = "red"/>
          <div>
            <h3>Construction Consultant</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              minus vitae cum quia quisquam pariatur dolorem eaque vel non
              facilis doloremque.
            </p>
          </div>
        </div>
      </div>
      <div className="services-container">
        <div className="services">
          <TruckIcon />
          <div>
            <h3>Subheader service</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              minus vitae cum quia quisquam pariatur dolorem eaque vel non
              facilis doloremque.
            </p>
          </div>
        </div>
        <div className="services service-middle">
          <TruckLoadingIcon />
          <div>
            <h3>Subheader service</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              minus vitae cum quia quisquam pariatur dolorem eaque vel non
              facilis doloremque.
            </p>
          </div>
        </div>
        <div className="services">
          <MicrophoneIcon />
          <div>
            <h3>Subheader service</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              minus vitae cum quia quisquam pariatur dolorem eaque vel non
              facilis doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
