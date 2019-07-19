import React from "react";
import axios from "axios";

import "./Source2environment.css";

import TitleProfil from "../Component/TitleProfil";
import Employe from "../Component/Employe";
import IconTextProfil from "../Component/IconTextProfil";
import IconFictif from "../Component/IconFictif"
import FollowUpFictif from "../Component/FollowUpFictif";

class Profil extends React.Component {
  state = {
    icon7: [],
    text_static7: [],
    icon8: [],
    text_static8: [],
    icon9: [],
    text_static9: [],
    icon10: [],
    text_static10: [],
    icon11: [],
    text_static11: [],
    icon12: [],
    text_static12: [],
    icon13: [],
    text_static13: [],
    icon14: [],
    text_static14: [],
    icon15: [],
    text_static15: [],
    title_profil: [],
    title_profil2:[],
    title_profil3:[]

  };

  getTitleProfil = async () => {
    const res = await axios.get("http://localhost:3001/text_static/40");
    this.setState({ title_profil: res.data[0] });
  };

  getTitleProfil2 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/44");
    this.setState({ title_profil2: res.data[0] });
  };

  getTitleProfil3 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/46");
    this.setState({ title_profil3: res.data[0] });
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
  getIconProfil4 = async () => {
    const res = await axios.get("http://localhost:3001/icon/24");
    this.setState({ icon10: res.data[0] });
  };

  getTextProfil4 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/45");
    this.setState({ text_static10: res.data[0] });
  };
  getIconProfil5 = async () => {
    const res = await axios.get("http://localhost:3001/icon/19");
    this.setState({ icon11: res.data[0] });
  };

  getTextProfil5 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/47");
    this.setState({ text_static11: res.data[0] });
  };

  getIconProfil6 = async () => {
    const res = await axios.get("http://localhost:3001/icon/20");
    this.setState({ icon12: res.data[0] });
  };

  getTextProfil6 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/48");
    this.setState({ text_static12: res.data[0] });
  };

  getIconProfil7 = async () => {
    const res = await axios.get("http://localhost:3001/icon/21");
    this.setState({ icon13: res.data[0] });
  };

  getTextProfil7 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/49");
    this.setState({ text_static13: res.data[0] });
  };

  getIconProfil8 = async () => {
    const res = await axios.get("http://localhost:3001/icon/22");
    this.setState({ icon14: res.data[0] });
  };

  getTextProfil8 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/50");
    this.setState({ text_static14: res.data[0] });
  };

  getIconProfil9 = async () => {
    const res = await axios.get("http://localhost:3001/icon/23");
    this.setState({ icon15: res.data[0] });
  };

  getTextProfil9 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/51");
    this.setState({ text_static15: res.data[0] });
  };
  componentDidMount() {
    this.getTitleProfil();
    this.getTitleProfil2();
    this.getTitleProfil3();
    this.getIconProfil();
    this.getTextProfil();
    this.getIconProfil2();
    this.getTextProfil2();
    this.getIconProfil3();
    this.getTextProfil3();
    this.getIconProfil4();
    this.getTextProfil4();
    this.getIconProfil5();
    this.getTextProfil5();
    this.getIconProfil6();
    this.getTextProfil6();
    this.getIconProfil7();
    this.getTextProfil7();
    this.getIconProfil8();
    this.getTextProfil8();
    this.getIconProfil9();
    this.getTextProfil9();
    
  }

  render() {
    const {
      title_profil,
      title_profil2,
      title_profil3,
      icon7,
      icon8,
      icon9,
      icon10,
      icon11,
      icon12,
      icon13,
      icon14,
      icon15,
      text_static7,
      text_static8,
      text_static9,
      text_static10,
      text_static11,
      text_static12,
      text_static13,
      text_static14,
      text_static15,

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
          alt1={icon7.description_alt}
          text_static7={text_static7.all_text}
          icon8={icon8.picture_src}
          alt2={icon8.description_alt}
          text_static8={text_static8.all_text}
          icon9={icon9.picture_src}
          alt3={icon9.description_alt}
          text_static9={text_static9.all_text}
          />
          <TitleProfil title_profil2={title_profil2.all_text}/>
          <FollowUpFictif icon10={icon10.picture_src}text_static10={text_static10.all_text}/>
          <TitleProfil title_profil3={title_profil3.all_text}/>
          <IconFictif icon11={icon11.picture_src}text_static11={text_static11.all_text}
                    icon12={icon12.picture_src}text_static12={text_static12.all_text}
                    icon13={icon13.picture_src}text_static13={text_static13.all_text}
                    icon14={icon14.picture_src}text_static14={text_static14.all_text}
                    icon15={icon15.picture_src}text_static15={text_static15.all_text}/>
      </div>
    );
  }
}
export default Profil;
