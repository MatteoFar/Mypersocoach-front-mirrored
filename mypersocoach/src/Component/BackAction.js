import React from "react";

import { withRouter } from "react-router-dom";
import "./BackAction.css"

class BackAction extends React.Component {
    

  handleClick = () => {
  this.props.history.push({
    pathname: "/solution2", 
    state: {
      
      summaryId: this.props.summaryId,
      problem_originId: this.props.problem_originId,
      addActions : this.props.addActions
    }
    
})
}
  
render() {
  return (
      <div className="back_action_container">
            
            {/* // Retour button in Solution 3 - summary of differents actions - return to solution2*/}
        
            <button href="#" className="button_back_action" type="reset" name="return" onClick={this.handleClick}>{this.props.text_static2}</button>
       
        
      </div>
    );
  }
}
export default withRouter(BackAction);
