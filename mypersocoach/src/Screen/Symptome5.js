import React from "react";
import axios from "axios";

import "./Source2environment.css";

import IconMain from "../Component/IconMain";
import TitlePage from "../Component/TitlePage";
import HeadingText from "../Component/HeadingText";
import FowardStep from "../Component/ForwardStep";
import NextStep from "../Component/NextStep";
import Answer from "../Component/Answer"
import NotReally from "../Component/NotReally";
import { validate } from "@babel/types";
import ForwardStep from "../Component/ForwardStep";
import Axios from "axios";

class Symptome5 extends React.Component {
  state = {
    icon: [],
    text_static: []
  };

  getHeader = async() => {
    const res = await axios.get("http://localhost:3001/icon/27")
    this.setState({ icon: res.data[0] });
    
  };
  
  getTextStatic = async () => {
    const res = await axios.get("http://localhost:3001/text_static/110")
    this.setState({ text_static: res.data[0] });
    
  };

  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
  }

  render() {
    const{icon,text_static}= this.state
    return (
      <div className="containerSource2Environment">
        <IconMain icon={icon.picture_src} />
        {/* <TitlePage problem_origin={this.state.problem_origin} /> */} 
        <HeadingText text_static={text_static.all_text} /> 
        <Answer/>
        <ForwardStep/>
        <NotReally />
      </div>
    );
  }
}
export default Symptome5;
