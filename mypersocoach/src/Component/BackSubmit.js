import React from "react";
import "./BackSubmit.css"

class BackSubmit extends React.Component {
  render() {
    return (
      <>
        <button href="#" className="button_back_submit">
        {this.props.text_static4}
        </button>
        
      </>
    );
  }
}

export default BackSubmit;
