import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./ModalExample.css";
// import { stat } from "fs";
const nl2br = require("react-nl2br");

class ModalExample extends React.Component {
 state = {
   modal: false,
 };
  
 HandleOpenModal () {
     this.setState({ modal: true });
   }
 CloseModal = () => {
   this.setState({ modal: !this.state.modal });
  // this.setState({ modal: false });
  // if (this.state.modal === true) {
  //    return console.log("true");
  //  } else {
  //    console.log("false");
  //  }
 };

  render() {
    
    const modal = this.state.modal ? "modal_main" : "modaloff";
   
    return (
      <div className= {modal} >
        <div className="modal_text2">
          
          <img className="belief_image" src={this.props.icon_modal} />
          <p>{nl2br(this.props.text_modal1)}</p>
          <p onClick={this.HandleOpenModal} className="pass_continue">{this.props.modal_continue}</p>
          <p onClick={this.CloseModal} className="modal_closed">{this.props.modal_closed}</p>

        </div>
      </div>
    );
  }
}

export default ModalExample;
