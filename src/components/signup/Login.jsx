import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/detailsform");
  };
  return (
    <div className="container">
      <form className="signup-form">
        {/* <input type="text" placeholder="username" /> */}
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
