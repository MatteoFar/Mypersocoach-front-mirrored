import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./ModalExample.css";
// import { stat } from "fs";
const nl2br = require("react-nl2br");

class ModalExample extends React.Component {
  state = {
    show: true
  };

  HandleOpenModal() {
    this.setState({ show: true });
  }
  CloseModal = () => {
    this.setState({ show: false });
    // this.setState({ show: false });
    // if (this.state.show === true) {
    //    return console.log("true");
    //  } else {
    //    console.log("false");
    //  }
  };

  render() {
    const modal = this.state.show ? "modal_main1" : "modaloff1";

    return (
      <div className={modal}>
        <div className="modal_main1">
          <img className="belief_image" src={this.props.icon_modal} alt={this.props.alt}/>
          <p>{nl2br(this.props.text_modal1)}</p>
          <p onClick={this.HandleOpenModal} className="pass_continue">
            {this.props.modal_continue}
          </p>
          <p onClick={this.CloseModal} className="modal_closed">
            {this.props.modal_closed}
          </p>
        </div>
      </div>
    );
  }
}

export default ModalExample;
