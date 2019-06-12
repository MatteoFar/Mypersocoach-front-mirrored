import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./Source2environment.css";

const headingIcons3 = [
  {
    image: require("../Pages/logo_heading2.png"),
    text: `Mon environment`
  }
];

const text_environments = [
  {
    text: `Il faut s'interroger : qu'est ce qui dans ton environnement pourrait être la cause de ton problème`
  },
  {
    text: `Où est-ce que tu travailles le mieux ?`
  },
  {
    text: `De quel type de personne aimes-tu t'entourer ?`
  },
  {
    text: `Quel type de personne prend toute ton énergie ?`
  },
  {
    text: `Quelles heures de la journée sont les plus productives pour toi ?` 
  }
]
const text2 = [
  {
    text: `Semble-t-il y avoir un élément dans ton environnement de travail qui serait la cause de ton problème ?` 
  }
  
];
const Source2Environment = () => {
  return (
    
    <div className="containersource2">
      <div className="logoText">
        {headingIcons3.map(headingIcon3 => (
          <img className="image_icon" alt="icon" src={headingIcon3.image} />
        ))}
        {text_environments.map(text_environment => (
          <p> {text_environment.text} </p>
        ))}
      </div>
      {/* <div className="icons">
        {iconProblems3.map(iconProblem2 => (
          <button className="iconLink">
            <img href="#" className="image_icon" alt="icon" src={iconProblem2.icon} />
            <p className="text">{iconProblem2.text}</p>
          </button> 
        ))}
       
        </div> */}
     
     <button href="#" className="button_source2">Je ne suis pas sûr</button>
   
    </div>
    
     );
    };
export default Source2Environment;
