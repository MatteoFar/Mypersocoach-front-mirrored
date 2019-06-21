import React from "react";
import './Problem.css';


// const t = [
//   {
//     icon: require("../Component/icon_problem.png"),
//     text: `Résoudre un problème`
//   },
  
  
// ];
// const iconGoals = [
//   {
//     icon: require("../Component/icon_goal.png"),
//     text: `Atteindre un objectif`
//   }
// ];

// const conflictModal = [
//   {
//     icon: require("../Component/icon_problem.png"),
//     text: `Apaiser une situation conflictuelle 
//     Résoudre un probleme
//     Faire évoluer une situation`
//   }
// ];

// const goalModal = [
//   {
//     icon: require("../Component/icon_goal.png"),
//     text: `Atteindre un objectif individuel
//     Améliorer une performence
//     Réussir quelque chose qui semble compliqué`
//   }
// ];

class Problem extends React.Component {

  state = {
    showGoalModal : false,
    showConflictModal : false,
    bodyContent : [],
    modalText : []
  }

  getBodyContent = () => {
      fetch('http://localhost:3001/main_theme')
        .then(res => res.json())
        .then(data => {
          this.setState({ bodyContent : data })
        })
      // fetch('http://localhost:3001/text_static/6')
      //   .then(res => res.json())
      //   .then(data => {
      //     this.setState({ modalText : data})
      //   }) 

  }

  componentDidMount(){
    this.getBodyContent()
  }
  
  /* Function that allows to exchange cards */
  handleshowGoalModal = () => {
    if(this.state.showGoalModal === true)
    this.setState({ showGoalModal: this.state.showGoalModal })
    else if (this.state.showConflictModal === false) {
      this.setState({  showGoalModal: !this.state.showGoalModal  })
    }
    else {
      return(this.setState({ showGoalModal: !this.state.showGoalModal, showConflictModal: this.state.showGoalModal }))
    }
  }
  handleshowConflictModal = () => {
    if(this.state.showConflictModal === true)
    this.setState({  showConflictModal: this.state.showConflictModal  })
    else if (this.state.showGoalModal === false) {
      this.setState({  showConflictModal: !this.state.showConflictModal  })
    }
    else {
      this.setState({ showConflictModal: !this.state.showConflictModal ,showGoalModal: this.state.showConflictModal })
    }
  }
 /* ------------------------------------------------*/


  render() { 
    console.log(this.state.bodyContent)
    return (
    <div className="modal_container">
      <div className="display-modal">
        <div className="button" >
          {this.state.bodyContent.map(content => (
            <div  onClick ={() => this.handleshowConflictModal()}>
              <img className="image_icon" alt="icon" src={content.picture_src} />
              <p className="text">{content.all_text}</p>
            </div>
          ))}
        </div>
        {/* <div className="button" >
          {this.state.bodyContent.map(iconGoal => (
            <div  onClick ={this.handleshowGoalModal}>
              <img className="image_icon" alt="icon" src={iconGoal.picture_src} />
              <p className="text">{iconGoal.all_text}</p>
            </div>
          ))}
         </div> */}
       </div>

       {/*  modal Objective ↑ */}
       {/*  modal Problem ↓ */}

        
       <div className="modal_Cards">
        <div >
          {this.state.bodyContent.filter(iconProblem => {
            if(this.state.showConflictModal === true && this.state.showGoalModal === false )
            return(iconProblem)}).map(iconProblem=> {
            return (<div className="Problem_modal">
                     <img className="icon_problem" alt="icon_problem" src={iconProblem.picture_src}/>
                     <p>{iconProblem.all_text}</p>
                     <button type="button" name ="C'est parti !">C'est parti !</button>
                    </div>)
           })}
        </div>

        {/* <div >
          {this.state.bodyContent.filter(iconGoal=> {
            if(this.state.showGoalModal === true && this.state.showConflictModal === false )
            return(iconGoal)}).map(iconProblem=> {
            return (<div className ="Goal_modal">
                     <img className="icon_Goal" alt="icon_Goal" src={iconProblem.picture_src}/>
                     <p>{iconProblem.text}</p>
                     <button type="button" name ="C'est parti !" >C'est parti !</button>
                    </div>)
          })}
       </div> */}
      </div>
   </div>
      
    );
  }
}

export default Problem;