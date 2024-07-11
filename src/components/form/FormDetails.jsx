import React from "react";
import "./FormDetails.css";
import { useNavigate } from "react-router-dom";

const FormDetails = () => {
  const navigate = useNavigate();

  const userview = () => {
    navigate("/userview");
  };
  return (
    <div className="blueprint-container">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Image" />
          <input type="text" placeholder="LinkedIn" />
          <input type="text" placeholder="Github" />
          <input type="text" placeholder="Contact No" />
          <button type="submit" onClick={userview}>
            GENERATE QR
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormDetails;
