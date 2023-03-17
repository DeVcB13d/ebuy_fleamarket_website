import React ,{ useState } from "react";
// import image1 from "client\ebuy_app\src\image1.jpg";
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";

function App() {
  const[currentForm,setCurrentForm]=useState('login');
  const toggleForm = (FormName) => {
    setCurrentForm(FormName);
  }
  return (
    <div className="App">
       {
        currentForm === "login" ? <Login onFormSwitch ={toggleForm}/> : <Register onFormSwitch ={toggleForm}/>
      }
       <div className="right_data mt-5" style={{ width: "100%" }}>
       <div className="reactLogo mt-5">
    </div></div>
    </div>
  );
}

export default App;
