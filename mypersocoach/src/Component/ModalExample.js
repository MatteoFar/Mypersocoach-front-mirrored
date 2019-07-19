import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./ModalExample.css";
// import { stat } from "fs";
const nl2br = require("react-nl2br");

class ModalExample extends React.Component {
  state = {
    show: true,
    show2: false,
    show3: false,
    show_modal: true,

  };

  HandleOpenModal = () => {
   
    
    if (this.state.show === true && this.state.show2 === false) {
      return this.setState({ show2: true, show: false }, () => {
       
      });
    }
    if (this.state.show2 === true) {
      return this.setState({ show3: true, show2: false }, () => {
       
        
      });
    }
    if (this.state.show3 === true ) {
      return this.setState({ show: true, show3: false }, () => {
       
        
      });
    }
    this.setState({ show: true, show2: false, show3: false }, () => {
     
      
    });
    
  };

  CloseModal = () => {
    this.setState({ show: true });
    this.setState({ show2: false });
    this.setState({ show3: false });
    this.props.CloseModal();
    
  
  };

  render() {
    const modal = this.state.show ? "modal_main1" : "modaloff1";
    const modal2 = this.state.show2 ? "modal_main1" : "modaloff1";
    const modal3 = this.state.show3 ? "modal_main1" : "modaloff1";
   
    
    return (
      <>
        <div className={modal}>
          <div className="modal_main1">
            <img className="belief_image" src={this.props.icon_modal} alt={this.props.alt}/>
            <p>{nl2br(this.props.text_modal1)}</p>
            <p onClick={this.HandleOpenModal} className="pass_continue">
              {this.props.modal_continue}
            </p>
            <p onClick={this.props.CloseModal} className="modal_closed">
              {this.props.modal_closed}
            </p>
          </div>
        </div>

        <div className={modal2}>
          <div className="modal_main1">
            <img className="belief_image" src={this.props.icon_modal} alt={this.props.alt}/>
            <p>{nl2br(this.props.text_modal2)}</p>
            <p onClick={this.HandleOpenModal} className="pass_continue">
              {this.props.modal_continue}
            </p>
            <p onClick={this.CloseModal} className="modal_closed">
              {this.props.modal_closed}
            </p>
          </div>
        </div>

        <div className={modal3}>
          <div className="modal_main1">
            <img className="belief_image" src={this.props.icon_modal} alt={this.props.alt}/>
            <p>{nl2br(this.props.text_modal3)}</p>
            <p onClick={this.CloseModal} className="pass_continue">
              {this.props.button_finish}
            </p>
          </div>
        </div>
         {/* <div className={show_modal}>
          <div className="modal_main1">
            <img className="belief_image" src={this.props.icon_modal_action} />
            <p>{nl2br(this.props.text_modal_action)}</p>
            <p onClick={this.CloseModal} className="pass_continue">
              {this.props.button_finish}
            </p>
          </div>
        </div>  */}
      </>
    );
  }
}
export default ModalExample;