import React from "react";
import "./Origins.css"

import "../Component/HeadingText.css"

const Origins = ({ problem_origins }) => {
  return (
      <>
     {/* <div className="logoTextSymptome3">
        {headingIcons3.map(headingIcon3 => (
          <img className="image_icon" alt="icon" src={headingIcon3.image} />
        ))}
        {headingTexts3.map(headingText3 => (
          <p> {headingText3.text} </p>
        ))}
      </div> */}
      
      <div>
          <button className="iconLink">
            <img href="#" className="image_icon" alt="icon" src={problem_origins.picture_src} />
            <p className="text">{problem_origins.all_text}</p>
          </button>
      </div>
      </>
  );
};

export default Origins;
