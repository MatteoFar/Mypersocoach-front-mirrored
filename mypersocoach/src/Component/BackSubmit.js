import React from "react";
import {NavLink} from "react-router-dom";

import "./BackSubmit.css";

class BackSubmit extends React.Component {
  render() {
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
}

export default BackSubmit;
