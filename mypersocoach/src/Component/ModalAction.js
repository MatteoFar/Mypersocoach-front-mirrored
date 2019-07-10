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
    const show_modal = this.state.modal_action ? "modal_main1" : "modaloff1";

    return (
      <>
        <div className={show_modal}>
          <div className="modal_main1">
            <img className="belief_image" src={this.props.icon_modal_action} />
            <p>{nl2br(this.props.text_modal_action)}</p>
            <p onClick={this.CloseModal} className="pass_continue">
              {this.props.button_finish}
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default ModalAction;
