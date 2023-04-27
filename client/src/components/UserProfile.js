import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  // Initialize user data
  const [userData, setUserData] = useState({
    name: "Jane Rose",
    address: "Street no.34 ,Gandhi Road,Thrissur,680303",
    contact: "7994301606",
    email: "janerose@gmail.com",
    password: "********",
    boughtItems: ["item 1", "item 2", "item 3"],
    soldItems: ["item 4", "item 5", "item 6"],
  });

  // State for password change
  const [newPassword, setNewPassword] = useState("");

  // Function to handle password change
  const handlePasswordChange = () => {
    setUserData({
      ...userData,
      password: newPassword,
    });
    setNewPassword("");
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Address: {userData.address}</p>
      <p>Contact: {userData.contact}</p>
      <p>Email: {userData.email}</p>
      <form onSubmit={handlePasswordChange}>
        <label>New Password: </label>
        <input
          className="password-input"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="password-button" type="submit">Change Password</button>
      </form>
      <h2>Bought Items:</h2>
      <ul className="bought-items">
        {userData.boughtItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Sold Items:</h2>
      <ul className="sold-items">
        {userData.soldItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
