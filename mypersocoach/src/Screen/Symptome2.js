import React from "react";
import axios from "axios";

import "./Symptome2.css";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import FowardStep from "../Component/ForwardStep";
import NotReally from "../Component/NotReally";
import ResponseSymptome2 from "../Component/ResponseSymptome2"
import ForwardStep from "../Component/ForwardStep";
import BackSubmit from "../Component/BackSubmit";


class Symptome2 extends React.Component {
  state = {
    icon: [],
    text_static: []
  };

  getHeader = async () => {
    const res= await axios.get("http://localhost:3001/icon/1")
        this.setState({ icon: res.data[0] });
      
  };
 
  getTextStatic = async () => {
    const res= await axios.get("http://localhost:3001/text_static/15")
        this.setState({ text_static: res.data[0] });
      
  };

  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
  }

  render() {
    const{icon,text_static}= this.state
    return (
      <div className="containerS2">
      <div className="containerSymptome2">
        <IconMain icon={icon.picture_src} />
        <HeadingText text_static={text_static.all_text} /> 
        <ResponseSymptome2 />
        <ForwardStep/>
        <BackSubmit />
      </div>
      </div>
    );
  }
}
export default Symptome2;
