import React, { useState } from "react";
import "./UserView.css";
import user from "../../assets/user.png";

import scanner from "../../assets/scanner.png";
import qr from "../../assets/qr.jpg";
import { useNavigate } from "react-router-dom";

const UserView = () => {
  const [selectedImage, setSelectedImage] = useState(qr);

  const navigate = useNavigate();
  const handleFriendList = () => {
    navigate("/friendslist");
  };
  const scannedProfile = () => {
    navigate("/scannedprofiles");
  };
  const userCardProfile = () => {
    navigate("/dbcards");
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="userview-container">
      <div className="userview">
        <div className="top-userview">
          <img
            src={user}
            alt=""
            className="user-profile"
            onClick={userCardProfile}
          />
          <button onClick={handleFriendList}>Friends</button>
          <img
            src={scanner}
            alt="Scanner"
            onClick={() => handleImageClick(scanner)}
          />
          <img src={qr} alt="QR Code" onClick={() => handleImageClick(qr)} />
        </div>
        <div className="viewer">
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
        <button onClick={scannedProfile}>Scanned Profiles</button>
      </div>
    </div>
  );
};

export default UserView;
