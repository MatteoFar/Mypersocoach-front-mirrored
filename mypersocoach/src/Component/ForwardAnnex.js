import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import "../Component/ForwardAnnex.css"


class ForwardAnnex extends Component {
  
  handleClick = () => {
    
  this.props.history.push("/Symptome5");
    
    }

    render() {
  return (
    <>
      <button onClick={this.handleClick} href="#" className="button_symptom3">
        Pas vraiment
      </button>
    </>
  );
}
};


export default withRouter(ForwardAnnex);