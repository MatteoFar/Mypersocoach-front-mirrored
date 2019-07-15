import React from "react";
import {NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./BackAction.css"

class BackAction extends React.Component {
    

  handleClick = () => {
  this.props.history.push({
    pathname: "/solution2", 
    state: {
      
      summaryId: this.props.summaryId,
      problem_originId: this.props.problem_originId
    }
    
})
}
  
render() {
  return (
      <div className="back_action_container">

        {/* Attention ! Le retour ne doit pas effacer les actions */}
        {/* <NavLink to="/solution2"> */}
            <button href="#" className="button_back_action" type="reset" name="return" onClick={this.handleClick}>{this.props.text_static2}</button>
        {/* </NavLink> */}
        
      </div>
    );
  }
}
export default withRouter(BackAction);
