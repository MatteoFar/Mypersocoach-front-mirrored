import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./Source2.css";

const headingIcons3 = [
  {
    image: require("../Pages/logo_heading2.png")
  }
];
const headingTexts3 = [
  {
    text: `Voici des raisons qui pourraient expliquer l'origine du problème. Y en a-t-il une qui te semble correcte ?`
  }
];
const iconProblems3 = [
  {
    icon: require(`../Pages/logo_environment.png`),
    text: `Mon environnement`
  },
  {
    icon: require(`../Pages/logo_behavior.png`),
    text: `Mon comportement`
  },
  {
    icon: require(`../Pages/logo_capacity.png`),
    text: `Mes capacités`
  },
  {
    icon: require(`../Pages/logo_conviction.png`),
    text: `Mes croyances et valeurs`
  }
  
];
const Source2 = () => {
  return (
    
    <div className="containersource2">
      <div className="logoTextSymptome3">
        {headingIcons3.map(headingIcon3 => (
          <img className="image_icon" alt="icon" src={headingIcon3.image} />
        ))}
        {headingTexts3.map(headingText3 => (
          <p> {headingText3.text} </p>
        ))}
      </div>
      <div className="icons">
        {iconProblems3.map(iconProblem2 => (
          <button className="iconLink">
            <img href="#" className="image_icon" alt="icon" src={iconProblem2.icon} />
            <p className="text">{iconProblem2.text}</p>
          </button>
        ))}
       
      </div>
     
     <button href="#" className="button_source2">Je ne suis pas sûr</button>
   
    </div>
    
     );
    };
export default Source2;
