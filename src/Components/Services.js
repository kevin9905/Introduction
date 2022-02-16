import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileCode,
  faChalkboard,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individually and always focus on the
                result
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>
                Responsible for creating the design and layout of a website or
                web page
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faChalkboard}
                  size="2x"
                />
              </div>
              <h3>Tutoring</h3>
              <p>
                A tutor works with students and help to perform at higher level
                academically
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faSearchDollar}
                  size="2x"
                />
              </div>
              <h3>Sales</h3>
              <p>
                Able to market products such as speakers, headphones and
                computer part
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
