import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import reactLogo from "./images/6505894.jpg";

function App() {
	const [currentForm, setCurrentForm] = useState('login');

	const toggleForm = (FormName) => {
		setCurrentForm(FormName);
	}
	return (
		<div className="App">
			{
				currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
			}
			<div className="right_data mt-15" style={{ width: "100%" }}>
				<div className="reactLogo mt-10">
					<img src={reactLogo} alt="react logo" class="login-img" width="600" height="650" />
				</div></div>
		</div>
	);
}

export default App;
