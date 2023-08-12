import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const hideNavbarOnPaths = ["/Productupload", "/UserProfile"]; // add the paths where you want to hide the navbar

  if (hideNavbarOnPaths.includes(location.pathname)) {
    return null; // don't render the navbar
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/#">
          Ebuy🛍️🛒
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shop">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};


export default Navbar;
