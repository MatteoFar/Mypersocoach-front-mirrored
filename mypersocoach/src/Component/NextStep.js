import React from "react";
import "./NextStep.css"
import { withRouter } from "react-router-dom";

class NextStep extends React.Component {
  
  
  handleClick = () => {
  
  // redirection for non in source2environnement page
    if (this.props.redirectionPage === 'source2comportement') {
    this.props.history.push({
      pathname: "/source2comportement", 
      state: {
        
        summaryId: this.props.summaryId,
        problem_originId: this.props.problem_originId
      }
      
  })
}
// redirection for non in source2capacité page
else if (this.props.redirectionPage === 'source2capacite') {
  this.props.history.push({
    pathname: "/source2capacites", 
    state: {
      
      summaryId: this.props.summaryId,
      problem_originId: this.props.problem_originId
    }
    
})
}
// redirection for non in source2croyances page
else if (this.props.redirectionPage === 'source2croyances') {
  this.props.history.push({
    pathname: "/source2croyances", 
    state: {
      
      summaryId: this.props.summaryId,
      problem_originId: this.props.problem_originId
    }
    
})
  }
  
  // redirection for non, toward reformulation page
  else if (this.props.redirectionPage === 'reformulation') {
  this.props.history.push({
    pathname: "/reformulation", 
    state: {
      
      summaryId: this.props.summaryId,
      problem_originId: this.props.problem_originId
    }
    
})
}

  } 
  
  
  render(){
  return (
      <>
        <button href="#" className="buttonSource2No" type="button" name="next" onClick={this.handleClick}>{this.props.text_static3 } </button>
      </>
    );
  }
  }

export default withRouter(NextStep);
