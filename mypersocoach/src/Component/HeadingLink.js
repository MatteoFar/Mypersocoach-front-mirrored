import React, { Component } from "react";
import ModalExample from "./ModalExample";
import axios from "axios";
import "./HeadingLink.css";

class HeadingLink extends Component {
  state = {
    text_static_link: [],
    icon_modal: [],
    text_modal1: [],
    modal_continue: [],
    modal_closed: [],
    show: false
  };
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

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    this.getIconModal();
    this.getTextModal();
    this.getModalContinue();
    this.getModalClosed();
  }
  render() {
    const {
      icon_modal,
      text_modal1,
      modal_continue,
      modal_closed
    } = this.state;
    const showHideModal = this.state.show ? "modal display-block" : "modal display-none";
    return (
      
        <div>
        <div className={showHideModal}>
          <ModalExample
            icon_modal={icon_modal.picture_src}
            text_modal1={text_modal1.all_text}
            modal_continue={modal_continue.all_text}
            modal_closed={modal_closed.all_text}
          />
        </div>
        <div onClick={this.showModal} className="heading_link">
          {this.props.text_static_link}
        </div>

      </div>
      
    );
  }
}
export default HeadingLink;
