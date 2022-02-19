import React from "react";
import { Link } from "react-scroll";
import NavigationLink from "../Data/NavigationLink";
//REACT FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navbar = NavigationLink.map((e, idx) => {
    return (
      <li key={idx} className="nav-item active">
        <Link smooth={true} to={e.ref} offset={-120} className="nav-link">
          {e.name}
        </Link>
      </li>
    );
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="home">
          <h3 className="title">NGUYENPHAM</h3>
        </Link>
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
          <ul className="navbar-nav ml-auto">{navbar}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
