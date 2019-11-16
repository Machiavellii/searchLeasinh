import React from "react";
import Logo from "../../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#!">
                Personal Leasing deals{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Business Leasing Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                News and Guides
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
