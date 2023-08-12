import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductUpload from "./components/ProductUpload";
// import Shop from "./components/shop";
// import Shopnow from "./components/shop";
// import ProductUploadPage from "./components/Productupload";
// import UserProfile from "./components/UserProfile";
// import ShoppingPage from "./components/shop/ShoppingPage";

import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/About">
        <About />
      </Route>

      <Route path="/Contact">
        <Contact />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route exact path="/Signup">
        <Signup />
      </Route>

      <Route exact path="/ProductUpload">
        <ProductUpload />
      </Route>
    </>
  );
};
export default App;
