import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./ModalExample.css";
// import { stat } from "fs";
const nl2br = require("react-nl2br");
class ModalExample extends React.Component {
  state = {
    modal: true
  };

  Showmodal = () => {
    this.setState({ modal: !this.state.modal });
    if (this.state.modal === true) {
      return console.log("true");
    } else {
      console.log("false");
    }
  };

  render() {
    const name = {
      name: this.props.text_static3
    };
    // console.log(name)
    const modal = this.state.modal ? "modal_main" : "modaloff";
    // // let modal = this.state.count === 0 ? 'modaloff' : 'modal_main' ;
    return (
      <div className={modal}>
        <div className="modal_text2">
          {/* <div> */}
          <img className="belief_image" src={this.props.icon_modal} />
          <p>{nl2br(this.props.text_modal1)}</p>
          {/* </div>
           */}
          {/* <div > */}
            <p className="pass_continue">{this.props.modal_continue}</p>
          {/* </div> */}
          <p onClick={this.Showmodal}className="modal_closed">{this.props.modal_closed}</p>
        </div>
      </div>
    );
  }
}

export default ModalExample;
