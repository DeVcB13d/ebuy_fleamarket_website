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
import UserProfile from "./components/UserProfile";
import SingleProduct from "./components/SingleProduct";
import HomeScreen from "./components/HomeScreen";

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

      <Route exact path="/UserProfile/:id">
        <UserProfile/>
      </Route>

      <Route exact path="/ProductUpload">
        <ProductUpload />
      </Route>

      <Route path="/Product/:id">
        <SingleProduct />
      </Route>

      <Route path="/Homepage">
        <HomeScreen />
      </Route>


    </>
  );
};
export default App;
