import React,{useState} from "react";
export const Login = (props) => {
    const [email , setEmail] =useState('');
    const [password , setPassword] =useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email);

    }
    return (
        <div className  = "auth-form-container">
          <form className="Login-form"onSubmit={handleSubmit}>
            <label for="email">Email/Phone</label>
            <input value={email}onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="your username" id="email" name="email"  />
            <label for="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type ="password" placeholder="*********" id="email" name="email"  />
            <button type = "submit">Sign In</button>
            </form> 
            
            <button className ="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account ?
                     Register here</button>
            
        </div>
    )
}