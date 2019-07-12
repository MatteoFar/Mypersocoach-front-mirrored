import React from "react";
import {NavLink } from "react-router-dom";

import "./BackAction.css"

const BackAction = ({ text_static2 }) => {
    return (
      <div className="back_action_container">

        {/* Attention ! Le retour ne doit pas effacer les actions */}
        <NavLink to="/solution-2">
            <button href="#" className="button_back_action" type="reset" name="return">{text_static2}</button>
        </NavLink>
        
      </div>
    );
  }

export default BackAction;
