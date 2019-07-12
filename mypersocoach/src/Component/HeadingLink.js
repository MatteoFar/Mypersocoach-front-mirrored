import React, { Component } from "react";
import ModalExample from "./ModalExample";
import axios from "axios";

import "./HeadingLink.css";


class HeadingLink extends Component {
  state = {
    text_static_link: [],
    icon_modal: [],
    icon_modal_action: [],
    text_modal_action: [],
    text_modal1: [],
    text_modal2: [],
    text_modal3: [],
    modal_continue: [],
    modal_closed: [],
    button_finish: [],
    modal_link: false
  };
  // HandleOpenLink=()=> {
  //   if(this.state.modal_link === false ) {
  //     return this.setState({ modal_link: !this.state.modal_link });
  //    }
  //   }
  getIconModal = async () => {
    const res = await axios.get("http://localhost:3001/problem_origin/4");
    this.setState({ icon_modal: res.data[0] });
    console.log(res);
  };

  getTextModal = async () => {
    const res = await axios.get("http://localhost:3001/text_static/52");
    this.setState({ text_modal1: res.data[0] });
    console.log(res);
  };
  getTextModal2 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/53");
    this.setState({ text_modal2: res.data[0] });
    console.log(res);
  };
  getTextModal3 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/54");
    this.setState({ text_modal3: res.data[0] });
    console.log(res);
  };
  getModalContinue = async () => {
    const res = await axios.get("http://localhost:3001/text_static/58");
    this.setState({ modal_continue: res.data[0] });
    console.log(res);
  };
  getModalClosed = async () => {
    const res = await axios.get("http://localhost:3001/text_static/59");
    this.setState({ modal_closed: res.data[0] });
    console.log(res);
  };

  getButtonFinish = async () => {
    const res = await axios.get("http://localhost:3001/text_static/60");
    this.setState({ button_finish: res.data[0] });
  };

  showModal = () => {
    if (this.state.modal_link === false) {
      this.setState({ modal_link: true });
    } else {
      this.setState({ modal_link: false });
    }
    console.log(this.state.modal_link)
    
  };

  // hideModal = () => {
  //   this.setState({ modal_link: false });
  // };



  componentDidMount() {
    this.getIconModal();
    this.getTextModal2();
    this.getTextModal3();
    this.getTextModal();
    this.getModalContinue();
    this.getModalClosed();
    this.getButtonFinish();
  }
  render() {

    const {
      icon_modal,
      text_modal1,
      text_modal2,
      text_modal3,
      modal_continue,
      modal_closed,
      button_finish
    } = this.state;
    const showHideModal =  this.state.modal_link
      ? "modal_main1"
      : "modaloff1";
    // const show_modal = this.state.modal_action ? "modal display-block" : "modal display-none";
    return (
      <>
        <div>
          <div className={showHideModal}>
            <ModalExample
              modal_link={this.state.modal_link}
              icon_modal={icon_modal.picture_src}
              alt={icon_modal.description_alt}
              text_modal1={text_modal1.all_text}
              text_modal2={text_modal2.all_text}
              text_modal3={text_modal3.all_text}
              modal_continue={modal_continue.all_text}
              modal_closed={modal_closed.all_text}
              button_finish={button_finish.all_text}
              CloseModal={this.showModal}
            />
          </div>
          <div onClick={this.showModal} className="heading_link">
            {this.props.text_static_link}
          </div>
        </div>
      </>
    );
  }
}
export default HeadingLink;