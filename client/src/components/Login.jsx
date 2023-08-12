import React, {useState} from "react";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";



const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signUpData = { email, password };
    console.log(signUpData);
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(signUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      alert(json.message);
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      window.alert("The login was successful");
      console.log("user login success");
	  history.push("/#");
	  window.location.reload();
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6" onSubmit={handleSubmit}>
          <MDBInput
            wrapperClass="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            placeholder="Enter email"
          />
          <MDBInput
            wrapperClass="mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            placeholder="Password"
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="/Signup">New user? Sign up!</a>
          </div>

          <button 
            type="submit" 
            class="btn btn-primary btn-lg btn-block"
            onClick={handleSubmit}
          >
            Log In
          </button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
