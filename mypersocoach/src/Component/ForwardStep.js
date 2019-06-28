import React from "react";
import "./ForwardStep.css"

const ForwardStep = ({ text_static }) => {
    return (
      <div className="forward_step_container">
        <button href="#" className="buttonForward_Step" type="button" name="">{text_static}</button>
      </div>
    );
  }

export default ForwardStep;
