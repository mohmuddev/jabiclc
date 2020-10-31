import React from "react";
import "./Service.css";
import { EditIcon } from "react-line-awesome";
import { BuildingIcon } from "react-line-awesome";
import { TruckIcon } from "react-line-awesome";
import { CarIcon } from "react-line-awesome";
import { TintIcon } from "react-line-awesome";
import { UserIcon } from "react-line-awesome";

const Services = () => {
  return (
    <div className="Service" id="Service">
      <h2>
        Our core <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services">
          <EditIcon />
          <div>
            <h3>Drawing and Ideation</h3>
            <p>
              Our team is dedicated to meeting the needs and fulfilling the
              dreams of our clients. We strive to provide design and artitecture
              service with an expert level of knowledge and experience.
            </p>
          </div>
        </div>
        <div className="services service-middle">
          <BuildingIcon />
          <div>
            <h3>Construction and Building</h3>
            <p>
              With over 5 years of experience in the construction industry, we
              offer quality workmanship with acute attention to detail in the
              building and renovation of commercial and residential properties.
            </p>
          </div>
        </div>
        <div className="services">
          <UserIcon />
          <div>
            <h3>Construction Consultant</h3>
            <p>
              For Temporary and Permanent Works Design consultancy delivered
              promptly, tap into our wealth of experience to bring efficient
              transport and construction solutions to your projects
            </p>
          </div>
        </div>
      </div>
      <div className="services-container">
        <div className="services">
          <TruckIcon />
          <div>
            <h3>Transport Service</h3>
            <p>
              Our professional Logistics company offer customs clearance
              services for relocation from city to city through raod. Our
              nationally licensed staff work closely with clients to help.
            </p>
          </div>
        </div>
        <div className="services service-middle">
          <CarIcon />
          <div>
            <h3>Vehicle Rent</h3>
            <p>
              We offer long term hire/rental services at very competitive
              monthly rate. Automatic or manual transmission vehicles are
              available. We deliver vehicles at client's door step or airport on
              arrival.
            </p>
          </div>
        </div>
        <div className="services">
          <TintIcon />
          <div>
            <h3>Food & Water Logistics</h3>
            <p>
              We offer to our clients,a cost effective,secure,timely and
              efficient solution for all logistic services such as food and
              water and other demands, to and from any point in the Somalia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
