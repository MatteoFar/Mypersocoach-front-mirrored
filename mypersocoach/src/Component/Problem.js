import React from "react";
import ProblemModal from "../components/ProblemModal"

//import { ButtonToolbar, Button,Modal, ModalBody } from 'reactstrap'
//import { Modal, ModalBody } from 'reactstrap'

const iconProblems = [
  {
    icon: require("../components/icon_problem.png"),
    text: `Résoudre un problème.`
  },
  {
    icon: require("../components/icon_goal.png"),
    text: `Atteindre un objectif.`
  }
  
];

class Problem extends React.Component {
  render() {
    
    return (
      <div className="icons">
        <div>
          {iconProblems.map(iconProblem => (
            <div>
              < img className="image_icon" alt="icon" src={iconProblem.icon} />
              <p className="text">{iconProblem.text}</p>
            </div>
          ))}
        </div>
        <ProblemModal/>
      </div>
    );
  }
}

export default Problem;
