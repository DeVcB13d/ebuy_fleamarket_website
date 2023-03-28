import React, { useState } from "react";
import logo from "./logo .png";
import signinimage from "C:/Users/namit/Documents/GitHub/ebuy_fleamarket_website/client/src/76884837.jpg"

function Header() {
  return <img src={logo} alt="Logo" />;
}

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="body">
      <div className="auth-form-container">
        <label htmlFor="Ebuy">Sign in here 🔐</label>
        <div className="form-container">
          <form className="Login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email/Phone</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your username"
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
            <button type="submit">Sign In</button>
            <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
          Don't have an account? Register here
        </button>
          </form>
          <div className="image-container">
            <img
              src={signinimage}
              className="img-fluid"
              alt="Welcome to our eCommerce store!"/>
        <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
          
        </button>
      </div></div></div>
    </div>
  );
};

export default Login;
