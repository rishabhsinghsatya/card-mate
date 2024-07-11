import React from "react";
import "./DBCards.css";
import user from "../../assets/user.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import mail from "../../assets/mail.png";
import scanner from "../../assets/scanner.png";
import qr from "../../assets/qr.jpg";

const DBCards = () => {
  return (
    // <div className="container">
    <div className="card-container">
      <div className="upper-section">
        <img src={user} alt="user profile" />
        <div className="name-profession">
          <h1>John Doe</h1>
          <h3>Software Engineer</h3>
        </div>
        <img src={qr} alt="qr image" />
      </div>
      <div className="bottom-section">
        <div className="social-link">
          <img src={mail} alt="email " />
          <p>johndoe@gmail.com</p>
        </div>
        <div className="social-link">
          <img src={github} alt="email " />
          <p>github/john-doe</p>
        </div>
        <div className="social-link">
          <img src={linkedin} alt="email " />
          <p>linkedin/johndoe</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default DBCards;
