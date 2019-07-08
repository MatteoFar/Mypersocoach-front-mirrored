import React from "react";
import "./ForwardStep.css"
import { withRouter } from "react-router-dom";

class ForwardStep extends React.Component{
    state= {
      summaryId:'',
      problem_originId:''
    }
  
  handleClick = () => {
    if(this.props.redirectionPage === 'Source2') {
      this.props.history.push({
          pathname: "/Source2", 
          state: {summaryId: this.props.summaryId}
          });
      } 
      else if (this.props.redirectionPage === 'source3_environment') {
        this.props.history.push({
          pathname: "/source3_environment", 
          state: {
            summaryId: this.props.summaryId,
            problem_originId: this.props.problem_originId
          }
        
        });
      }
        else if (this.props.redirectionPage === 'source3_comportement') {
        this.props.history.push({
          pathname: "/source3_comportement", 
          state: {
            summaryId: this.props.summaryId,
            problem_originId: this.props.problem_originId
          }
          
      })
    }
  
    else if (this.props.redirectionPage === 'source3_capacites') {
      this.props.history.push({
        pathname: "/source3_capacites", 
        state: {
          summaryId: this.props.summaryId,
          problem_originId: this.props.problem_originId
        }
        
    })
  }

  else if (this.props.redirectionPage === 'source3_croyances') {
    this.props.history.push({
      pathname: "/source3_croyances", 
      state: {
        summaryId: this.props.summaryId,
        problem_originId: this.props.problem_originId
      }
      
  })
}
    
  
  }
  
  
  render(){
  return (
      <div className="forward_step_container">
        <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.text_static2} </button>
      </div>
    );
  }
}
export default withRouter(ForwardStep);
