import React from "react";

import "./Source2environment.css";

import IconMain from "../Component/IconMain";
import TitlePage from "../Component/TitlePage";
import HeadingText from "../Component/HeadingText";

import Form from "../Component/Form";

class Source3Environment extends React.Component {
  state = {
    icon: [],
    problem_origin: [],
    text_static: []
  };

  getHeader = () => {
    fetch("http://localhost:3001/icon/6")
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
    fetch("http://localhost:3001/text_static/27")
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
   console.log('est ce que ma summary_id se charge?', this.props.location.state.summaryId)
   console.log('et mon rpoblem origin id alors?', this.props.location.state.problem_originId)
    return (
      <div className="containerSource2Environment">
        <IconMain icon={this.state.icon.picture_src} alt={this.state.icon.description_alt}/>
        <TitlePage problem_origin={this.state.problem_origin} /> 
        <HeadingText text_static={this.state.text_static.all_text} /> 
        <Form  idRespEnvironment={this.props.location.state.idRespEnvironment} summaryId={this.props.location.state.summaryId} problem_originId={this.props.location.state.problem_originId} redirectionPage={'Source2environnement'}/>
      </div>
    );
  }
}
export default Source3Environment;
