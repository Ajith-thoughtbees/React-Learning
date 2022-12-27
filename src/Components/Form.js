import "../Stylesheet/Form.css";
import "../Assets/Regex";
import React from "react";
import { emailValidator,passwordValidator } from "../Assets/Regex";

const Forms = () => {
  const [input, setInput] = React.useState({ email: "", password: "" });
  const [errorMessage, seterrorMessage] = React.useState("");
  const [successMessage, setsuccessMessage] = React.useState("");

  const handleSubmit = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmitSuccess = (event) => {
    event.preventDefault();   
    setsuccessMessage('');
    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email id");
      
    if (!passwordValidator(input.password))
      return seterrorMessage(
        "Password should have minimum 8 number")
        setsuccessMessage('Successfully Validated');
  };
  return (
    <form onSubmit={handleSubmitSuccess}>
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
    <label for="username">Username</label>
    <input type="text" placeholder="Email or Phone" id="username"  onChange={handleSubmit} />
  
    <label for="password">Password</label>
    <input type="password" placeholder="Password" id="password"  onChange={handleSubmit} />
  
    <button type="submit">Log In</button>
  </form>
  );
};
export default Forms;
