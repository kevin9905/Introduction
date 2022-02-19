import React from "react";
import ServicesData from "../Data/ServicesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Services = () => {
  const services = ServicesData.map((e, inx) => {
    return (
      <div className="col-lg-3 col-md-6 col-sm-6" key={inx}>
        <div className="box">
          <div className="circle">
            <FontAwesomeIcon className="icon" icon={e.icon} size="2x" />
          </div>
          <h3>{e.services}</h3>
          <p>{e.description}</p>
        </div>
      </div>
    );
  });
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">{services}</div>
      </div>
    </div>
  );
};

export default Services;
