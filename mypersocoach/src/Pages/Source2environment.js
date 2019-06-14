import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./Source2environment.css";

const headingEnvironments = [
  {
    image: require("../Pages/logo_heading2.png")
  }
];
const iconTextEnvironments = [
  {
    image: require("../Pages/logo_environment.png"),
    text: "Mon environnement"
  }
];
const textEnvironments = [
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
  },
  {
    text: `Semble-t-il y avoir un élément dans ton environnement de travail qui serait la cause de ton problème ?`
  }
];

const Source2Environment = () => {
  return (
    <div className="containerSource2Environment">
      <div className="logoTextEnvironment">
        {headingEnvironments.map(headingEnvironment => (
          <img
            className="imageIconEnvironment"
            alt="icon"
            src={headingEnvironment.image}
          />
        ))}
      </div>
      <div className="iconTextEnvironment">
        {iconTextEnvironments.map(iconTextEnvironment => (
          <>
            <img
              href="#"
              className="iconEnvironment"
              alt="icon"
              src={iconTextEnvironment.image}
            />
            <p className="textEnvironment">{iconTextEnvironment.text}</p>
          </>
        ))}
      </div>

      {textEnvironments.map(textEnvironment => (
        <p className="noMarginText"> {textEnvironment.text} </p>
      ))}

      <button href="#" className="buttonSource2Yes">Oui</button>
      
      <button href="#" className="buttonSource2No">Non</button>
    </div>
  )
}
export default Source2Environment;
