import React, { Component } from "react";
import ModalAction from "./ModalAction"
import axios from "axios";

import "./HeadingLink.css";


class HeadingLinkAction extends Component {
  state = {
    text_static_link: [],
    icon_modal: [],
    icon_modal_action:[],
    text_modal_action:[],
    text_modal1: [],
    text_modal2:[],
    text_modal3:[],
    modal_continue: [],
    button_finish:[],
    modal_link_action: false
  };
  HandleOpenLink=()=> {
    if(this.state.modal_link_action === false ) {
      return this.setState({ modal_link_action: !this.state.modal_link_action });
     }
    }
  
  getIconModalAction = async () => {
    const res = await axios.get("http://localhost:3001/icon/5");
    this.setState({ icon_modal_action: res.data[0] });
   
  };
  getTextModalAction = async () => {
    const res = await axios.get("http://localhost:3001/text_static/55");
    this.setState({ text_modal_action: res.data[0] });
   
  };
  
  getButtonFinish = async () => {
    const res = await axios.get("http://localhost:3001/text_static/60");
    this.setState({ button_finish: res.data[0] });
  };

  

  showModal = () => {
    if (this.state.modal_link_action === false) {
      this.setState({ modal_link_action: true });
    } else {
      this.setState({ modal_link_action: false });
    }
   
    
  };

  componentDidMount() {
    
    this.getIconModalAction();
    this.getTextModalAction();
    this.getButtonFinish();
  }
  render() {
    const {
    
      icon_modal_action,
      text_modal_action,
      button_finish
    } = this.state;
    
    const show_modal = this.state.modal_link_action ? "modal_main1" : "modaloff1";
    return (
      <>
       
        <div onClick={this.showModal} className="heading_link">
          {this.props.text_static_link}
        </div>
        
        <div className={show_modal} >
          <ModalAction modal_link_action={this.state.modal_link_action}
            icon_modal_action={icon_modal_action.picture_src} alt={icon_modal_action.description_alt}
            text_modal_action={text_modal_action.all_text}
            button_finish={button_finish.all_text}
            CloseModal = {this.showModal}
          />

      </div>
      </>
      
      );
    }
}
export default HeadingLinkAction;