import React from "react";
import {NavLink} from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./BackSubmit.css";

class BackSubmit extends React.Component {
  
  state={
    summaryId:'',
    
  }
  
  handleClick = () => {
    
    // retour en arrière vers source 2 depuis ???????
    if (this.props.redirectionPage==="source2"){
      this.props.history.push({
          pathname: "/Source2", 
          state: {summaryId: this.props.summaryId}
          });
        }
        // retour en arriere je ne valide pas depuis recap final vers solution2
    else {
      
      
      this.props.history.push({
        pathname: "/Solution2", 
        state: {summaryId: this.props.summaryId,
          
        }
        });
    }
    }
  
  
  render() {
    
   
    if (this.props.redirectionPage==="symptome3"){
    return (
      <>
        <NavLink className="navlinkcenter" to="/symptome3">
          <button href="#" className="button_back_submit">
            {this.props.text_static4}
          </button>
        </NavLink>
        
      </>
    );
  } 

  else if (this.props.redirectionPage==="source2") {
    return (
      <>
        <div className="navlinkcenter" to="/Source2">
          <button href="#" className="button_back_submit" onClick={this.handleClick}>
            {this.props.textButtonNo}
          </button>
        </div>
        
      </>
    );

  }
  
  // retour vers solution2 pour "je ne valide pas" dans recap final : Saut1
  else if (this.props.backSubmit === "backSubmit") {
   
    return (
      <>
        <div className="navlinkcenter" to="/Solution2">
          <button href="#" className="button_back_submit" onClick={this.handleClick}>
            {this.props.text_static5}
          </button>
        </div>
        
      </>
    );
  }

  }
}

export default withRouter(BackSubmit);
