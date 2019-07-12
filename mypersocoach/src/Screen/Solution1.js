import React from "react";
import axios from "axios";

import "./Source2croyances.css";


import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import ForwardStep from "../Component/ForwardStep";
import HeadingLinkAction from "../Component/HeadingLinkAction";


class Solution1 extends React.Component {
  state = {
    icon: [],
    text_static: [],
    text_static_link: [],
    text_static4: [],
    link_modal : false,
  
  };
  
  getHeader = async () => {
    const res = await axios.get("http://localhost:3001/icon/5");
    this.setState({ icon: res.data[0] });
    // .then(data => {
    //   this.setState({ icon: data[0] });
    // });
  };
  
  getTextStatic = async () => {
    const res = await axios.get("http://localhost:3001/text_static/34");
    this.setState({ text_static: res.data[0] });
    // .then(data => {
    // this.setState({ text_static: data[0] });
    // });
    // console.log(res)
  };
  
  getTextLink = async () => {
    const res = await axios.get("http://localhost:3001/text_static/61");
    this.setState({ text_static_link: res.data[0] });
  };
  
  getTextStatic4 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/125");
    this.setState({ text_static4: res.data[0] });
    // .then(data => {
    //   this.setState({ text_static: data[0] });
    // });
  };
  
  
  LinkOpenModal() {
    this.setState({ link_modal: !this.state.link_modal });
  }

  componentDidMount() {
    this.getHeader();
    this.getTextLink();
    this.getTextStatic();
    this.getTextStatic4();

    
  }

  render() {
    const {
      icon,
      text_static,
      text_static_link,
      text_static4,
     
    } = this.state;


    return (
      <div className="containerSource2Environment">
        <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
        <HeadingText text_static={text_static.all_text} />
       
        <HeadingLinkAction 
          onClick={this.LinkOpenModal}
          text_static_link={text_static_link.all_text}
          link_modal= {this.state.link_modal}
        />


        <ForwardStep summaryId={this.props.location.state.summaryId} redirectionPage={'solution2'} text_static4={text_static4.all_text} /> 
       
      </div>
    );
  }
}

export default Solution1;