import React from "react";
import "./Developers.css";
import DeveloperDetails from "./DeveloperDetails";

function Developers() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Developers</h5>
      </div>
      <div className="widget__contents">
        <DeveloperDetails />
      </div>
    </div>
  );
}

export default Developers;
