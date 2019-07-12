import React from "react";
import axios from "axios";

import "./Source2environment.css";

import IconMain from "../Component/IconMain";
import TitlePage from "../Component/TitlePage";
import HeadingText from "../Component/HeadingText";
import HeadingLink from "../Component/HeadingLink";
import ForwardStep from "../Component/ForwardStep";
import NextStep from "../Component/NextStep";

class Source2Croyances extends React.Component {
  state = {
    icon: [],
    problem_origin: [],
    text_static: [],
    text_static_link: [],
    text_after_link: [],
    text_static1: [],
    text_static2: [],
    text_static3: [],
    text_modal1: [],
    // icon_modal: [],
    modal_continue: [],
    modal_closed: [],
    link_modal : false,
  
  };
  
  getHeader = async () => {
    const res = await axios.get("http://localhost:3001/icon/6");
    this.setState({ icon: res.data[0] });
    // .then(data => {
    //   this.setState({ icon: data[0] });
    // });
  };
  getProblem = async () => {
    const res = await axios.get("http://localhost:3001/problem_origin/4");
    this.setState({ problem_origin: res.data[0] });
    // .then(data => {
    //   this.setState({ problem_origin: data[0] });
    // });
  };
  getTextStatic2 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/17");
    this.setState({ text_static1: res.data[0] });
    // .then(data => {
    // this.setState({ text_static: data[0] });
    // });
    // console.log(res)
  };
  getTextStatic = async () => {
    const res = await axios.get("http://localhost:3001/text_static/25");
    this.setState({ text_static: res.data[0] });
    // .then(data => {
    //   this.setState({ text_static: data[0] });
    // });
  };
  getTextLink = async () => {
    const res = await axios.get("http://localhost:3001/text_static/106");
    this.setState({ text_static_link: res.data[0] });
  };
  getTextAfterLink = async () => {
    const res = await axios.get("http://localhost:3001/text_static/26");
    this.setState({ text_after_link: res.data[0] });
  };
  
  getTextStatic2 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/121");
    this.setState({ text_static2: res.data[0] });
    // .then(data => {
    //   this.setState({ text_static: data[0] });
    // });
  };
  

  getTextStatic3 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/122");
    this.setState({ text_static3: res.data[0] });
  }
  

  componentDidMount() {
    this.getHeader();
    this.getProblem();
    this.getTextLink();
    this.getTextAfterLink();
    this.getTextStatic();
    this.getTextStatic2();
    this.getTextStatic3();
    
  }
  
  render() {
    const {
      icon,
      problem_origin,
      text_static,
      text_static_link,
      text_after_link,
      text_static2,
      text_static3
     
    } = this.state;


    return (
      <div className="containerSource2Environment">
        <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
        <TitlePage problem_origin={problem_origin} />
        <HeadingText text_static={text_static.all_text} />
       
        <HeadingLink 
          onClick={this.LinkOpenModal}
          text_static_link={text_static_link.all_text}
          link_modal= {this.state.link_modal}
        
        />

        <HeadingText text_after_link={text_after_link.all_text} />
        <ForwardStep redirectionPage = {'source3_croyances'}  text_static2={text_static2.all_text} summaryId={this.props.location.state.summaryId} problem_originId={this.props.location.state.problem_originId} />
        <NextStep summaryId={this.props.location.state.summaryId} redirectionPage={'reformulation'} text_static3={text_static3.all_text} />
      </div>
    );
  }
}

export default Source2Croyances;
