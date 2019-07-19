import React from "react";
import {NavLink} from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./BackSubmit.css";

class BackSubmit extends React.Component {
  
  state={

    summaryId:'',
    
  }
  
  handleClick = () => {
    
    // back return to source 2 from reformulation summary by clicking on "non je ne suis pas sûr" button
  

    if (this.props.redirectionPage === "source2") {
      this.props.history.push({
          pathname: "/Source2", 
          state: {summaryId: this.props.summaryId}
          });
        }
    // back return "je ne valide pas" from final summary (Saut1) to solution2 (the page where the employee can choose his actions)

    else {

      this.props.history.push({
          pathname: "/Solution2", 
          state: {
            
            summaryId: this.props.summaryId,
            
            }
        });
    }
}
  
  
  render() {
    
   // "Retour" Button from symptome4_conflict to Symptome3 (the page with 6 possibles issues)

    if (this.props.redirectionPage === "symptome3"){
      return (
      
        <NavLink className="navlinkcenter" to="/symptome3">
          <button href="#" className="button_back_submit">
            {this.props.text_static4}
          </button>
        </NavLink>
      
      );
  } 

  // when we are in reformulation summary we can return to source 2 - by clicking on "non je ne suis pas sûr" button
  
    else if (this.props.redirectionPage==="source2") {
      return (
      
          <div className="navlinkcenter" to="/Source2">
            <button href="#" className="button_back_submit" onClick={this.handleClick}>
              {this.props.textButtonNo}
            </button>
          </div>
          
        
      );

    }
  
  // return to solution2 with "je ne valide pas" button in final summary : Saut1

    else if (this.props.backSubmit === "backSubmit") {
    
      return (
      
          <div className="navlinkcenter" to="/Solution2">
            <button href="#" className="button_back_submit" onClick={this.handleClick}>
              {this.props.text_static5}
            </button>
          </div>
          
      
      );
    }



  }
}



export default withRouter(BackSubmit);
