import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/detailsform");
  };
  return (
    <div className="container">
      <form className="signup-form">
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
