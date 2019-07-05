import React from "react";
import "./ForwardStep.css"
import { withRouter } from "react-router-dom";

class ForwardStep extends React.Component{
    state= {
      summaryId:''
    }
  
  handleClick = () => {
    if(this.props.redirectionPage === 1) {
      this.props.history.push({
          pathname: "/Source2", 
          state: {summaryId: this.props.lastId}
          });
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
