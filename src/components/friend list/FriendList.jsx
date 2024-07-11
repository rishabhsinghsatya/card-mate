import React from "react";
import "../scanned profile/ScannedProfiles.css";
import DBCards from "../DBCards/DBCards";
const FriendList = () => {
  return (
    <div className="list-view-container">
      <div className="cards-view">
        <DBCards />
        <DBCards />
        <DBCards />
        <DBCards />
      </div>
    </div>
  );
};

export default FriendList;
