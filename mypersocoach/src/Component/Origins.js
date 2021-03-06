import React from "react";
import "./Origins.css"

import "../Component/HeadingText.css"
import { withRouter } from "react-router-dom";


class Origins extends React.Component {
  
  state={
    summaryId:'',
    problem_originId: ''
  }
  
  handleClick = () => {
   
    if(this.props.problem_origins.id === 1) {
      this.props.history.push({
        pathname: "/Source2environment", 
        state: { 
          summaryId: this.props.summaryId,
          problem_originId: this.props.problem_origins.id
        }
        });
    }

    else if(this.props.problem_origins.id === 2) {
      this.props.history.push({
        pathname: "/source2comportement", 
        state: { 
          summaryId: this.props.summaryId,
          problem_originId: this.props.problem_origins.id
        }
        });
    }

    else if(this.props.problem_origins.id === 3) {
      this.props.history.push({
        pathname: "/Source2capacites", 
        state: { 
          summaryId: this.props.summaryId, 
          problem_originId: this.props.problem_origins.id
        }
       
      });
    }

    else if(this.props.problem_origins.id === 4) {
      this.props.history.push({
        pathname: "/Source2croyances", 
        state: { 
          summaryId: this.props.summaryId, 
          problem_originId: this.props.problem_origins.id
        }
        });
    }
    
  }
  
  render() {
    
    
  return (
      <>
     
      
      <div>
          <button onClick={this.handleClick} className="iconLink">
            <img href="#" className="image_icon" alt={this.props.problem_origins.description_alt} src={this.props.problem_origins.picture_src} />
            <p className="text">{this.props.problem_origins.all_text}</p>
          </button>
      </div>
      </>
  );
};
}
export default withRouter(Origins);
