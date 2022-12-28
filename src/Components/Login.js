import "../Stylesheet/Form.css";
import "../Assets/Regex";
import React from "react";
import { emailValidator,passwordValidator } from "../Assets/Regex";
import {useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate ()
	const [input, setInput] = React.useState({ email: '', password: '' });

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

	const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

  const formSubmitter  = (event) => {
    event.preventDefault();   
    setsuccessMessage('');
    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email id");
      
    if (!passwordValidator(input.password))
      return seterrorMessage(
        "Password should have minimum 8 number")
        // setsuccessMessage('Successfully Validated');
    if(input.email !== 'ajith@gmail.com' || input.password !== '12345678') return seterrorMessage('Please enter valid credentials'); 
    navigate('/dashboard')
  };
  return (
    <div className="jack">
    <form onSubmit={formSubmitter}>
    <h3>Login Here</h3>
    {errorMessage.length > 0 && (
            <div style={{ marginTop: "20px", color: "red" }}>
              {errorMessage}
            </div>
          )}
          {successMessage.length > 0 && (
            <div style={{ marginTop: "20px", color: "green" }}>
              {successMessage}
            </div>
          )}
    <label htmlFor="username">Username</label>
    <input type="text" placeholder="Email or Phone" id="username" name="email" onChange={handleChange} />
  
    <label htmlFor="password">Password</label>
    <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange} />
  
    <button type="submit">Log In</button>
  </form></div>
	);
};

export default Login;
