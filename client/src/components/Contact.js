import React from 'react';
import contactimage from "../contact-image.jpg";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-4">
          <h3 className="text-center text-lg-left">Contact Us</h3>
          <form>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">Email address</label>
              <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="messageInput">Message</label>
              <textarea className="form-control" id="messageInput" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-lg-4">
          <img src={contactimage} className="img-fluid rounded" alt="Contact us" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
