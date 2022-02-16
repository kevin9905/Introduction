import React from "react";
import logo from "../nature-logo.png";
import { Link } from "react-scroll";
//REACT FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h3 className="title">NGUYENPHAM</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about_me"
                offset={-120}
                className="nav-link"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-120}
                className="nav-link"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-120}
                className="nav-link"
              >
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-120}
                className="nav-link"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-120}
                className="nav-link"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
