import React from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "./QNA.css";
import Developers from "./Developers";

function QNA() {
  return (
    <div className="quora">
      <QHeader />
      <div className="quora__content">
        <Feed />
        <Developers />
      </div>
    </div>
  );
}

export default QNA;
