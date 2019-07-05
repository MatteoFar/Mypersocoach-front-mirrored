import React from "react";
import "./Origins.css"

import "../Component/HeadingText.css"
import { withRouter } from "react-router-dom";


class Origins extends React.Component {
  
  state={
    summaryId:''
  }
  
  handleClick = () => {
   
    if(this.props.problem_origins.id === 1) {
      this.props.history.push({
        pathname: "/Source2environment", 
        state: { summaryId: this.props.summaryId }
        });
    }

    if(this.props.problem_origins.id === 2) {
      this.props.history.push({
        pathname: "/Source2comportement", 
        state: { summaryId: this.props.summaryId }
        });
    }

    if(this.props.problem_origins.id === 3) {
      this.props.history.push({
        pathname: "/Source2capacites", 
        state: { summaryId: this.props.summaryId }
        });
    }

    if(this.props.problem_origins.id === 4) {
      this.props.history.push({
        pathname: "/Source2croyances", 
        state: { summaryId: this.props.summaryId }
        });
    }
    
  }
  
  render() {
    console.log('test de map origin',this.props.problem_origins);
    console.log('id de summary', this.props.summaryId);
    
    
  return (
      <>
     {/* <div className="logoTextSymptome3">
        {headingIcons3.map(headingIcon3 => (
          <img className="image_icon" alt="icon" src={headingIcon3.image} />
        ))}
        {headingTexts3.map(headingText3 => (
          <p> {headingText3.text} </p>
        ))}
      </div> */}
      
      <div>
          <button onClick={this.handleClick} className="iconLink">
            <img href="#" className="image_icon" alt="icon" src={this.props.problem_origins.picture_src} />
            <p className="text">{this.props.problem_origins.all_text}</p>
          </button>
      </div>
      </>
  );
};
}
export default withRouter(Origins);
