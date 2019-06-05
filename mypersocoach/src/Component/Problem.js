import React from "react";
import './Problem.css'

//import { ButtonToolbar, Button,Modal, ModalBody } from 'reactstrap'
//import { Modal, ModalBody } from 'reactstrap'

const iconProblems = [
  {
    icon: require("../Component/icon_problem.png"),
    text: `Résoudre un problème.`
  },
  
  
];
const iconGoals = [
  {
    icon: require("../Component/icon_goal.png"),
    text: `Atteindre un objectif.`
  }
];

const conflictModal = [
  {
    icon: require("../Component/icon_problem.png"),
    text: `Apaiser une situation conflictuelle
    Résoudre un probleme
    Faire évoluer une situation`
  }
];

const goalModal = [
  {
    icon: require("../Component/icon_goal.png"),
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

      <div className="display-modal">
        <div>
          {iconProblems.map(iconGoal => (
            <button onClick ={this.handleshowConflictModal}>
              <img className="image_icon" alt="icon" src={iconGoal.icon} />
              <p className="text">{iconGoal.text}</p>
            </button>
          ))}
        </div>

        <div className="modal">
          {conflictModal.filter(iconProblem => {
            if(this.state.showConflictModal === true)
            return(iconProblem)
            else if (this.state.showGoalModal === true) {
              return(<p>hohoho</p>)
            }
            }).map(iconProblem=> {
            return (<div>
                     <img className="icon_problem" alt="icon_problem" src={iconProblem.icon}/>
                     <p>{iconProblem.text}</p>
                    </div>)
                  })}
        </div>

        <div>
          {iconGoals.map(iconGoal => (
            <button onClick ={this.handleshowGoalModal}>
              <img className="image_icon" alt="icon" src={iconGoal.icon} />
              <p className="text">{iconGoal.text}</p>
            </button>
          ))}
        </div>

        {/* <div className="modal">
          {goalModal.filter(iconGoal=> {
            if(this.state.showGoalModal === true && this.state.showConflictModal === false)
            return(iconGoal)
          }).map(iconProblem=> {
            return (<div>
                     <img className="icon_problem" alt="icon_problem" src={iconProblem.icon}/>
                     <p>{iconProblem.text}</p>
                    </div>)
          })}
        </div> */}
      </div>
    );
  }
}

export default Problem;