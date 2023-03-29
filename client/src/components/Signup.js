import React, { useState } from "react";
import signupimage from "C:/Users/namit/Documents/GitHub/ebuy_fleamarket_website/client/src/2480553.jpg";

const Signup = (props) => {
  const registerFormStyle = {
    marginLeft: '2cm',
  };
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container" style={registerFormStyle}>
      <label htmlFor="Ebuy">Sign up here ✍🏻</label>
      <form className="register-form" style={registerFormStyle} onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          value={Name}
          onChange={(e) => setName(e.target.value)}
          type="Name"
          placeholder="Your Name"
          id="Name"
          name="Name"
        />
        <label htmlFor="Phone">Phone</label>
        <input
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="Your Contact number"
          id="Phone"
          name="Phone"
        />
        <label htmlFor="Address">Address</label>
        <input
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          type="String"
          placeholder="Your Residential Adress"
          id="Address"
          name="Address"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your emailid"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <label htmlFor="Cpassword">Confirm Password</label>
        <input
          value={Cpassword}
          onChange={(e) => setCPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="Cpassword"
          name="Cpassword"
        />
        <button type="submit">Sign Up</button>
        <div className="link-btn-container">
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Sign in
          </button>
        </div>
      </form>
      <div className="image-container">
        <img src={signupimage} alt="Welcome to our eCommerce store!" />
      </div>
    </div>
  );
};

export default Signup;
