import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import your custom CSS for the navbar

const Navbar = () => {
  const location = useLocation();
  const hideNavbarOnPaths = ["/Productupload", "/UserProfile"]; // add the paths where you want to hide the navbar

  if (hideNavbarOnPaths.includes(location.pathname)) {
    return null; // don't render the navbar
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          Ebuy🛍️🛒
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link animated-hover"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link animated-hover" to="/about">
                About
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link animated-hover" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link animated-hover" to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link animated-hover" to="/signup">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link animated-hover" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link animated-hover" to="/UserProfile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link animated-hover" to="/ProductUpload">
              Upload
            </NavLink>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

