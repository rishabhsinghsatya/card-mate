import React from "react";
import "./ScannedProfiles.css";
import DBCards from "../DBCards/DBCards";

const ScannedProfiles = () => {
  return (
    <div className="list-view-container">
      <div className="cards-view">
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
        <DBCards />
        <button>ADD</button>
      </div>
    </div>
  );
};

export default ScannedProfiles;
