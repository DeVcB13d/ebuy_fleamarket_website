import React, { useState } from "react";
import logo from "./logo .png";

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
    <div className="auth-form-container">
      <label htmlFor="Ebuy">Ebuy🛍️🛒</label>
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
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account ? Register here
      </button>
    </div>
  );
};


export default Login