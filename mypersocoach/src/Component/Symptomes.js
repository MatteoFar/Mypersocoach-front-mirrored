import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import "../Component/Symptomes.css";

class Symptomes extends Component {
  state={
      lastId:""
  }


  handleClick = () => {
    if (this.props.problem.id === 1) {
      this.props.history.push({
        pathname: "/symptome4_conflict", 
        state: {lastId: this.props.lastId}
        });
    }
   
      else if (this.props.problem.id === 2) { this.props.history.push("/symptome4_perf")}
   
      else if (this.props.problem.id === 3) { this.props.history.push("/symptome4_orga")}
    
      else if (this.props.problem.id === 4) { this.props.history.push("/symptome4_com")}
   
      else if (this.props.problem.id === 5) { this.props.history.push("/symptome4_time")}
    
      else if (this.props.problem.id === 6) { this.props.history.push("/symptome4_stress")}
  }

  

  render(){
  console.log('couccou ma props',this.props.lastId)
  console.log('history çamarche?', this.props.history)
  console.log('mon objet', this)  
  
  return (
    <div className="iconsSymptom3">
      {/* {problem.map(problem => (  */}
      <button className="iconLinkSymptom3">
        <img
          href="#"
          className="imageIconSymptom3"
          alt="icon"
          src={this.props.problem.picture_src}
          onClick={this.handleClick} 
       
       />

        <p className="textSymptom3">{this.props.problem.all_text}</p>
      </button>
     
    </div>
  );
      }
};

export default withRouter(Symptomes);
