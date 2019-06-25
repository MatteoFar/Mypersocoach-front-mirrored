import React from "react";

import "../Component/HeadingText.css"

const nl2br = require('react-nl2br');
const HeadingText = ({ text_static }) => {
  return (
    <div className="Source2_heading_text">
      <p>{nl2br(text_static)}</p>
    </div>
  );
};

export default HeadingText;
