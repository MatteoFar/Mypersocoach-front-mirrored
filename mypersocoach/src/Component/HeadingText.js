import React from "react";
// import './Problem.css';
import "../Component/HeadingText.css"
const nl2br = require('react-nl2br');



const HeadingText = ({text_static}) => {

  return (

    <div className="heading_text_container">
      <p>{nl2br(text_static)}</p>
    </div>
    
    )
}

export default HeadingText;
