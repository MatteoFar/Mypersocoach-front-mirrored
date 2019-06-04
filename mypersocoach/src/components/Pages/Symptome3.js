import React from "react";

import "./Symptome3.css";

const headingIcons2 = [
  {
    image: require("../Pages/icon_heading.png")
  }
];
const headingTexts2 = [
  {
    text: `Voici des thématiques récurrentes,y en a-t-il une qui correspondond à la situation ?`
  }
];
const iconProblems2 = [
  {
    icon: require(`../Pages/logo_conflict.png`),
    text: `Conflit avec un collègue`
  },
  {
    icon: require(`../Pages/logo_perf.png`),
    text: `Ma performance`
  },
  {
    icon: require(`../Pages/logo_organiz.png`),
    text: `Problème d'organisation`
  },
  {
    icon: require(`../Pages/logo_communication.png`),
    text: `Problème de communication`
  },
  {
    icon: require(`../Pages/logo_time.png`),
    text: `Gestion du temps`
  },
  {
    icon: require(`../Pages/logo_stress.png`),
    text: `Gestion du stress`
  }
];
const Symptome3 = () => {
  return (
    <div className="containerSymptome3">
      <div className="logoText">
        {headingIcons2.map(headingIcon2 => (
          <img className="image_icon" alt="icon" src={headingIcon2.image} />
        ))}
        {headingTexts2.map(headingText2 => (
          <p> {headingText2.text} </p>
        ))}
      </div>
      <div className="icons">
        {iconProblems2.map(iconProblem2 => (
          <div>
            <img className="image_icon" alt="icon" src={iconProblem2.icon} />
            <p className="text">{iconProblem2.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Symptome3;
