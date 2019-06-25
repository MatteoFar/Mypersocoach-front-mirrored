import React from "react";

import "./Symptome2.css";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import FowardStep from "../Component/ForwardStep";
import NotReally from "../Component/NotReally";
import ResponseSymptome2 from "../Component/ResponseSymptome2"
import ForwardStep from "../Component/ForwardStep";
import BackSubmit from "../Component/BackSubmit";

class Source2Environment extends React.Component {
  state = {
    icon: [],
    problem_origin: [],
    text_static: []
  };

  getHeader = () => {
    fetch("http://localhost:3001/icon/1")
      .then(res => res.json())
      .then(data => {
        this.setState({ icon: data[0] });
      });
  };
  getProblem = () => {
    fetch("http://localhost:3001/problem_origin/1")
      .then(res => res.json())
      .then(data => {
        this.setState({ problem_origin: data[0] });
      });
  };
  getTextStatic = () => {
    fetch("http://localhost:3001/text_static/15")
      .then(res => res.json())
      .then(data => {
        this.setState({ text_static: data[0] });
      });
  };

  componentDidMount() {
    this.getHeader();
    this.getProblem();
    this.getTextStatic();
  }

  render() {
    return (
      <div className="containerS2">
      <div className="containerSymptome2">
        <IconMain icon={this.state.icon.picture_src} />
        <HeadingText text_static={this.state.text_static.all_text} /> 
        <ResponseSymptome2 />
        <ForwardStep/>
        <BackSubmit />
      </div>
      </div>
    );
  }
}
export default Source2Environment;
