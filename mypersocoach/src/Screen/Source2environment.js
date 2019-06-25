import React from "react";
import axios from "axios"

import "./Source2environment.css";

import IconMain from "../Component/IconMain";
import TitlePage from "../Component/TitlePage";
import HeadingText from "../Component/HeadingText";
import FowardStep from "../Component/ForwardStep";
import NextStep from "../Component/NextStep";


class Source2Environment extends React.Component {
  state = {
    icon: [],
    problem_origin: [],
    text_static: []
  };

  getHeader = async () => {
    const res= await axios.get("http://localhost:3001/icon/6")
    this.setState({ icon: res.data[0] })
      // .then(data => {
      //   this.setState({ icon: data[0] });
      // });
  };
  getProblem = async () => {
    const res= await axios.get("http://localhost:3001/problem_origin/1")
    this.setState({ problem_origin: res.data[0]})
    // .then(data => {
      //   this.setState({ problem_origin: data[0] });
      // });
  };
  getTextStatic = async () => {
    const res= await axios.get("http://localhost:3001/text_static/22")
    this.setState({ text_static: res.data[0] })
      // .then(data => {
      //   this.setState({ text_static: data[0] });
      // });
  };

  componentDidMount() {
    this.getHeader();
    this.getProblem();
    this.getTextStatic();
  }

  render() {
    const{icon, problem_origin, text_static}=this.state
    return (
      
      <div className="containerSource2Environment">
      
        <IconMain icon={icon.picture_src} />
        <TitlePage problem_origin={problem_origin} /> 
        <HeadingText text_static={text_static.all_text} />
        <FowardStep />
        <NextStep />
      </div>
        
    );
  }
}
export default Source2Environment;
