import React from "react";
// import './Problem.css';
import "../Component/HeadingText.css"
const nl2br = require('react-nl2br');



const HeadingText = ({text_static}) => {

  return (

<div>
        <div className="Source2_heading_text">
        <p>{nl2br(text_static)}</p>
        </div>
 </div>
)
}



export default HeadingText;
