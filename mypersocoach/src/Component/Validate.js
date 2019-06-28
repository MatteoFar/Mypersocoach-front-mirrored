import React from "react";
import "./Validate.css"
// import { validate } from "@babel/types";

const Validate = ({ text_static3 }) => {
    return (
      <div className="validate_container">
        <button href="#" className="button_validate" type="submit" name="valid">{text_static3}</button>
      </div>
    );
  }

export default Validate;
