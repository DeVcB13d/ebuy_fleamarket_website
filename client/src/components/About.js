import React from "react";
import aboutimage from "../images/about_img.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Welcome to our flea market! We are a community of sellers and buyers
          who love finding unique treasures and bargains👨🏻.
        </p>
        <p>
          We believe in the power of second chances and new beginnings which is,
          so you can feel good😊 about supporting our market and help many...
        </p>
        <p>Thank you for visiting us, and we hope to see you soon!</p>
        <p>ENJOY SHOPPING !!!!!!🛒🛒🛒</p>
        <p>
          And don't forget to follow us on social media to stay up to date on
          the latest market news and events!
        </p>
        <div
          className="social-media-links"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a href="https://www.facebook.com/ourfleamarket">
            <i
              className="fab fa-facebook-f fa-2x"
              style={{ color: "#d017befb" }}
            ></i>
          </a>
          <span className="social-media-space"></span>
          <a href="https://www.instagram.com/ourfleamarket">
            <i
              className="fab fa-instagram fa-2x"
              style={{ color: "#d017befb" }}
            ></i>
          </a>
          <span className="social-media-space"></span>
          <a href="https://twitter.com/ourfleamarket">
            <i
              className="fab fa-twitter fa-2x"
              style={{ color: "#d017befb" }}
            ></i>
          </a>
        </div>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="Flea market" />
      </div>
    </div>
  );
};

export default About;
