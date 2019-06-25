import React from "react";
import "./IconMain.css"

import "../Component/IconMain.css"

const IconMain = ({ icon }) => {
  return (
    <div className="logoTextEnvironment">
      <img src={icon} />
    </div>
  );
};

export default IconMain;
