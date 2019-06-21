import React from "react";

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
class Symptomes extends React.Component {
    render() {
      return (

      <div className="iconsSymptom3">
{iconProblems2.map(iconProblem2 => (
    <button className="iconLinkSymptom3">
      <img
        href="#"
        className="imageIconSymptom3"
        alt="icon"
        src={iconProblem2.icon}
      />
        
      <p className="textSymptom3">{iconProblem2.text}</p>
    </button>
  ))}
  
  </div>
      )}}

export default Symptomes