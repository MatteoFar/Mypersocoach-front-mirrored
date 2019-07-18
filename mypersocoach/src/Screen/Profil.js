import React from "react";
import axios from "axios";

import "./Source2environment.css";

import TitleProfil from "../Component/TitleProfil";
import Employe from "../Component/Employe";
import IconTextProfil from "../Component/IconTextProfil";

class Profil extends React.Component {
  state = {
    icon7: [],
    text_static7: [],
    icon8: [],
    text_static8: [],
    icon9: [],
    text_static9: [],
    title_profil: []
  };

  getTitleProfil = async () => {
    const res = await axios.get("http://localhost:3001/text_static/40");
    this.setState({ title_profil: res.data[0] });
  };
  getIconProfil = async () => {
    const res = await axios.get("http://localhost:3001/icon/27");
    this.setState({ icon7: res.data[0] });
  };

  getTextProfil = async () => {
    const res = await axios.get("http://localhost:3001/text_static/41");
    this.setState({ text_static7: res.data[0] });
  };

  getIconProfil2 = async () => {
    const res = await axios.get("http://localhost:3001/icon/6");
    this.setState({ icon8: res.data[0] });
  };

  getTextProfil2 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/42");
    this.setState({ text_static8: res.data[0] });
  };
  getIconProfil3 = async () => {
    const res = await axios.get("http://localhost:3001/icon/3");
    this.setState({ icon9: res.data[0] });
  };

  getTextProfil3 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/43");
    this.setState({ text_static9: res.data[0] });
  };

  componentDidMount() {
    this.getTitleProfil();
    this.getIconProfil();
    this.getTextProfil();
    this.getIconProfil2();
    this.getTextProfil2();
    this.getIconProfil3();
    this.getTextProfil3();
  }

  render() {
    const {
      title_profil,
      icon7,
      icon8,
      icon9,
      text_static7,
      text_static8,
      text_static9
    } = this.state;
    return (
      <div className="containerSource2Environment">
        <TitleProfil title_profil={title_profil.all_text} />
        <Employe />
        <IconTextProfil
          date={this.props.location.state.date}
          respAction={this.props.location.state.respAction}
          response={this.props.location.state.response}
          responseEnvironnement={
            this.props.location.state.responseEnvironnement
          }
          responseCroyance={this.props.location.state.responseCroyance}
          responseCapacite={this.props.location.state.responseCapacite}
          responseComportement={this.props.location.state.responseComportement}
          summaryId={this.props.location.state.summaryId}
          icon7={icon7.picture_src}
          alt={icon7.description_alt}
          text_static7={text_static7.all_text}
          icon8={icon8.picture_src}
          alt={icon8.description_alt}
          text_static8={text_static8.all_text}
          icon9={icon9.picture_src}
          alt={icon9.description_alt}
          text_static9={text_static9.all_text}
        />
      </div>
    );
  }
}
export default Profil;
