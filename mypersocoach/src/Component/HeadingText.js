import React from "react";

import "../Component/HeadingText.css"

const HeadingText = ({ text_static }) => {
  return (
    <div className="header_mainProb">
      <p>{text_static}</p>
    </div>
  );
};

export default HeadingText;
