import React from "react";
import axios from "axios";

import "../Screen/Symptome3.css";

//import {ButtonToolbar,Button } from 'reactstrap';

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import Symptomes from "../Component/Symptomes";
import ForwardAnnex from "../Component/ForwardAnnex";

class Symptome3 extends React.Component {
  state = {
    icon: [],
    text_static: [],
    problem: []
  };
  getHeader = async () => {
    const res = await axios.get("http://localhost:3001/icon/27");
    this.setState({ icon: res.data[0] });
  };

  getTextStatic = async () => {
    const res = await axios.get("http://localhost:3001/text_static/4");
    this.setState({ text_static: res.data[0] });
  };

  getThematic = async () => {
    const res = await axios.get("http://localhost:3001/problem/");
    this.setState({ problem: res.data });
  };
  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    this.getThematic();
  }

  render() {
    const { icon, text_static, problem } = this.state;
    return (
      <div className="containerSymptom3">
        <IconMain icon={icon.picture_src} />
        <HeadingText text_static={text_static.all_text} />
        <div className="flex">
        {problem.map(problem => (
          <Symptomes problem={problem} />
        ))}
        </div>
        <ForwardAnnex />
      </div>
    );
  }
}
export default Symptome3;
