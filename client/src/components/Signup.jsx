
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const history = useHistory();
	const registerFormStyle = {
		marginLeft: '2cm',
		width: "300px",
	};
	const labelStyle = {
		color: "#e03d0b",
	};
	const [username, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [Cpassword, setCPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [error, setError] = useState(null);
	const [register, setRegister] = useState(null);
	const handleSubmit = async (e) => {
		// prevent refresh
		e.preventDefault();
		if (password === Cpassword) {
			const userID = Math.floor(Math.random() * 90000) + 10000;
			const userData = { userID, email, username, password, address, phone }
			const response = await fetch('/api/signUp', {
				method: 'POST',
				body: JSON.stringify(userData),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const json = await response.json()
			if (!response.ok) {
				alert('The signup was not successful')
				setError(json.error)
			}
			if (response.ok) {
				setError(null)
				alert('The Signup was successful \n Please login to continue')
				console.log('user data added')
				history.push("/Login");
				window.location.reload();
			}
			console.log(email);
		}
		else {
			window.alert('The 2 passwords do not match, try again')
		}

	}
	useEffect(() => {
		const fetchRegisterData = async () => {
			const response = await fetch('/api/signUp')
			const json = await response.json()
			if (response.ok) {
				setRegister(json)
			}
		}
		fetchRegisterData()
	}, [])
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon className="ms-1" icon="envelope" size="lg" />
                <MDBInput
                  label="Name"
                  placeholder="Enter your name"
                  id="form1"
                  type="text"
                  className="w-100"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon className="ms-1" icon="envelope" size="lg" />
                <MDBInput 
                  label="Email" 
                  placeholder="Enter your email"
                  id="form2" 
                  type="email" 
                  className="w-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon className="ms-1" icon="envelope" size="lg" />
              <MDBInput
                label="Phone Number"
                id="form1"
                type="text"
                className="w-100"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4 ">
            <MDBIcon className="ms-1" icon="envelope" size="lg" />
            <MDBInput
              label="Address"
              id="form1"
              type="text"
              className="w-100"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput 
                  label="Password" 
                  id="form3" 
                  type="password" 
                  className="w-100"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Confirm Password"
                  placeholder ="Repeat your password"
                  id="form4"
                  type="password"
                  className="w-100"
                  value={Cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <button 
              type="submit" 
              class="btn btn-primary btn-lg btn-block"
              onClick={handleSubmit}
            >
              Register
            </button>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
