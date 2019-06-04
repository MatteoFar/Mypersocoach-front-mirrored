import React from "react";
import ProblemModal from "../components/ProblemModal"

//import { ButtonToolbar, Button,Modal, ModalBody } from 'reactstrap'
//import { Modal, ModalBody } from 'reactstrap'

const iconProblems = [
  {
    icon: require("../components/icon_problem.png"),
    text: `Résoudre un problème.`
  },
  
  
];
const iconGoals = [
  {
    icon: require("../components/icon_goal.png"),
    text: `Atteindre un objectif.`
  }
];

const conflictModal = [
  {
    icon: require("../components/icon_problem.png"),
    text: `Apaiser une situation conflictuelle
    Résoudre un probleme
    Faire évoluer une situation`
  }
];

const goalModal = [
  {
    icon: require("../components/icon_goal.png"),
    text: `Atteindre un objectif individuel
    Améliorer une performence
    Réussir quelque chose qui semble compliqué`
  }
];

class Problem extends React.Component {

  state = {
    showGoalModal : false,
    showConflictModal : false,
  }

  handleshowGoalModal =() => {
    this.setState({ showGoalModal: !this.state.showGoalModal })
  }
  handleshowConflictModal =() => {
    this.setState({ showConflictModal: !this.state.showConflictModal })
  }
  render() {

    return (
      <div className="modal">
        <div>
          {iconProblems.filter(iconProblem => {
            if(this.state.showConflictModal === true)
            return(iconProblem.conflictModal)
          }).map(iconProblem=> {
            <p>{iconProblem.icon}</p>
          })}
        </div>

        <div>
          {iconGoals.map(iconGoal => (
            <button>
              <img className="image_icon" alt="icon" src={iconGoal.icon} />
              <p className="text">{iconGoal.text}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Problem;
