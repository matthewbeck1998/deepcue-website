import React from "react";
import DeepCueLogo from "./DeepCueIcon.png";

function TitleBar() {
  return (
    <div className="title-bar">
      <img alt="DeepCue icon" className="icon" src={DeepCueLogo} />
      <h1 className="title">DeepCue</h1>
    </div>
  );
}

export default TitleBar;
