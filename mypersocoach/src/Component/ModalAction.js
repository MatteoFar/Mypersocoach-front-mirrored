import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./ModalExample.css";
// import { stat } from "fs";
const nl2br = require("react-nl2br");

class ModalAction extends React.Component {
  state = {
    modal_action: true
  };



  CloseModal = () => {
    this.setState({ modal_action: false });
    
  };

  render() {
   

    return (
      <>
        
          
            <img className="belief_image" src={this.props.icon_modal_action} alt={this.props.alt}/>
            <p>{nl2br(this.props.text_modal_action)}</p>
            <p onClick={this.props.CloseModal} className="pass_continue">
              {this.props.button_finish}
            </p>
          
        
      </>
    );
  }
}
export default ModalAction;
