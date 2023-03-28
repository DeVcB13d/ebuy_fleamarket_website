import React, { useState } from "react";
import signinimage from "../76884837.jpg"

const Signup = (props) => {
  const [Name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [Cpassword , setCPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="Name">Name</label>
        <input value={Name} onChange={(e) => setName(e.target.value)} type="Name" placeholder="Your Name" id="Name" name="Name"  />
        <label htmlFor="Phone">Phone</label>
        <input value={Phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Your Contact number" id="Phone" name="Phone"  />
        <label htmlFor="Address">Address</label>
        <input value={Address} onChange={(e) => setAddress(e.target.value)} type="String" placeholder="Your Residential Adress" id="Address" name="Address"  />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your emailid" id="email" name="email"  />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password"  />
        <label htmlFor="Cpassword">Confirm Password</label>
        <input value={Cpassword} onChange={(e) => setCPassword(e.target.value)} type="password" placeholder="*********" id="Cpassword" name="Cpassword"  />
        <button type="submit">Sign Up</button>
        <div className="link-btn-container">
          <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
            Already have an account? Sign in
          </button>
        </div>
      </form> 
      <div className="image-container">
        <img src={signinimage} alt="Welcome to our eCommerce store!" />
      </div>
    </div>
  );
}

export default Signup;
