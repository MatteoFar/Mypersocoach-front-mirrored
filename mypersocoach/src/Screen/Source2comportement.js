import React from "react";
import axios from "axios"

import "./Source2comportement.css";

import IconMain from "../Component/IconMain";
import TitlePage from "../Component/TitlePage";
import HeadingText from "../Component/HeadingText";
import ForwardStep from "../Component/ForwardStep";
import NextStep from "../Component/NextStep";


class Source2Comportement extends React.Component {
  state = {
    icon: [],
    problem_origin: [],
    text_static: [],
    text_static2: [],
    text_static3: []
  };

  getHeader = async () => {
    const res= await axios.get("http://localhost:3001/icon/6")
    this.setState({ icon: res.data[0] })
      // .then(data => {
      //   this.setState({ icon: data[0] });
      // });
  };
  getProblem = async () => {
    const res= await axios.get("http://localhost:3001/problem_origin/2")
    this.setState({ problem_origin: res.data[0]})
    // .then(data => {
      //   this.setState({ problem_origin: data[0] });
      // });
  };
  getTextStatic = async () => {
    const res= await axios.get("http://localhost:3001/text_static/23")
    this.setState({ text_static: res.data[0] })
      // .then(data => {
      //   this.setState({ text_static: data[0] });
      // });
  };

  getTextStatic2 = async () => {
    const res= await axios.get("http://localhost:3001/text_static/121")
    this.setState({ text_static2: res.data[0] })
      // .then(data => {
      //   this.setState({ text_static: data[0] });
      // });
  };

  getTextStatic3 = async () => {
    const res= await axios.get("http://localhost:3001/text_static/122")
    this.setState({ text_static3: res.data[0] })
      // .then(data => {
      //   this.setState({ text_static: data[0] });
      // });
  };

  componentDidMount() {
    this.getHeader();
    this.getProblem();
    this.getTextStatic();
    this.getTextStatic2();
    this.getTextStatic3();
  }

  render() {
    const{icon, problem_origin, text_static,text_static2,text_static3}=this.state
    
    
    return (
      
      <div className="containerSource2Comportement">
      
        <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
        <TitlePage problem_origin={problem_origin} /> 
        <HeadingText text_static={text_static.all_text} />
        <ForwardStep text_static2={text_static2.all_text} redirectionPage = {'source3_comportement'}  summaryId={this.props.location.state.summaryId} problem_originId={this.props.location.state.problem_originId}/>
        <NextStep summaryId={this.props.location.state.summaryId} redirectionPage={'source2capacite'}text_static3={text_static3.all_text}/>
      </div>
        
    );
  }
}
export default Source2Comportement;
