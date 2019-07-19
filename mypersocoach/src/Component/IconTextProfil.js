import React from "react";
import axios from "axios";
import ModalProfil from "./ModalProfil";

import "./IconTextProfil.css";

class IconTextProfil extends React.Component {
  state = {
    icon_modal_profil: [],
    icon_modal_profil2: [],
    icon_modal_profil3: [],
    text_modal_profil: [],
    text_modal_profil2: [],
    text_modal_profil3: [],
    date_modal_profil3: [],
    modal_finish: [],
    modal_link_profil: false,
    modal_link_profil2: false,
    modal_link_profil3: false,
   
  };

  getIconModalProfil = async () => {
    const res = await axios.get("http://localhost:3001/icon/1");
    this.setState({ icon_modal_profil: res.data[0] }
    );
  };
  getIconModalProfil2 = async () => {
    const res = await axios.get("http://localhost:3001/icon/6");
    this.setState({ icon_modal_profil2: res.data[0] }
    );
  };

  getIconModalProfil3 = async () => {
    const res = await axios.get("http://localhost:3001/icon/3");
    this.setState({ icon_modal_profil3: res.data[0] }
    );
  };
  getTextModalProfil = async () => {
    const res = await axios.get("http://localhost:3001/text_static/15");
    this.setState({ text_modal_profil: res.data[0] });
    
  };
  getTextModalProfil2 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/37");
    this.setState({ text_modal_profil2: res.data[0]});
    
  };
  getTextModalProfil3 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/38");
    this.setState({ text_modal_profil3: res.data[0] });
    
  };
  getDateModalProfil3 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/39");
    this.setState({ date_modal_profil3: res.data[0] });
    
  };

  getModalFinish = async () => {
    const res = await axios.get("http://localhost:3001/text_static/59");
    this.setState({ modal_finish: res.data[0] });
    
    };

  showModalProfil = () => {
    if (this.state.modal_link_profil === false) {
      this.setState({
        modal_link_profil: true
      });
    } else {
      this.setState({ modal_link_profil: false });
    }

    console.log(this.state.modal_link_profil);
  };

  showModalProfil2 = () => {
    if (this.state.modal_link_profil2 === false) {
      this.setState({
        modal_link_profil2: true
      });
    } else {
      this.setState({ modal_link_profil2: false });
    }
    console.log(this.state.modal_link_profil2);
  };

  showModalProfil3 = () => {
    if (this.state.modal_link_profil3 === false) {
      this.setState({
        modal_link_profil3: true
      });
    } else {
      this.setState({ modal_link_profil3: false });
    }
    console.log(this.state.modal_link_profil3);
  };




  componentDidMount() {
   
    this.getIconModalProfil();
    this.getIconModalProfil2();
    this.getIconModalProfil3();
    this.getTextModalProfil();
    this.getTextModalProfil2();
    this.getTextModalProfil3();
    this.getDateModalProfil3();
    this.getModalFinish();
  }

  render() {
   
    
    
    const {
      icon_modal_profil,
      icon_modal_profil2,
      icon_modal_profil3,
      text_modal_profil,
      text_modal_profil2,
      text_modal_profil3,
      date_modal_profil3,
      modal_finish,
      
    } = this.state;

    const showHideModal = this.state.modal_link_profil
      ? "modal_main1"
      : "modaloff1";
    const showHideModal2 = this.state.modal_link_profil2
      ? "modal_main1"
      : "modaloff1";
    const showHideModal3 = this.state.modal_link_profil3
      ? "modal_main1"
      : "modaloff1";
    return (
      <>
        <div className="icon_recap_profil">
          <button onClick={this.showModalProfil} className="icon_text_profil">
            <img
              className="size_icon_profil"
              src={this.props.icon7}
              alt={this.props.alt1}
            />
            <p className="size_text_profil">{this.props.text_static7}</p>
          </button>
          <button onClick={this.showModalProfil2} className="icon_text_profil">
            <img
              className="size_icon_profil"
              src={this.props.icon8}
              alt={this.props.alt2}
            />
            <p className="size_text_profil">{this.props.text_static8}</p>
          </button>
          <button onClick={this.showModalProfil3} className="icon_text_profil">
            <img
              className="size_icon_profil"
              src={this.props.icon9}
              alt={this.props.alt3}
            />
            <p className="size_text_profil">{this.props.text_static9}</p>
          </button>
        </div>

        <div className={showHideModal}>
          <ModalProfil
          response={this.props.response}
            
            
            
            modal_link_profil={this.state.modal_link_profil}
            icon_modal_profil={icon_modal_profil.picture_src}
            alt={icon_modal_profil.description_alt}
            text_modal_profil={text_modal_profil.all_text}
            modal_finish={modal_finish.all_text}
            CloseModal={this.showModalProfil}
          />
        </div>

        <div className={showHideModal2}>
          <ModalProfil
            responseEnvironnement= {this.props.responseEnvironnement}
            responseCroyance= {this.props.responseCroyance}
            responseCapacite={this.props.responseCapacite}
            responseComportement={this.props.responseComportement}
            modal_link_profil2={this.state.modal_link_profil2}
            icon_modal_profil2={icon_modal_profil2.picture_src}
            alt1={icon_modal_profil2.description_alt}
            text_modal_profil2={text_modal_profil2.all_text}
            modal_finish={modal_finish.all_text}
            CloseModal={this.showModalProfil2}
          />
        </div>

        <div className={showHideModal3}>
          <ModalProfil

            respAction={this.props.respAction}
            date={this.props.date}
            modal_link_profil3={this.state.modal_link_profil3}
            icon_modal_profil3={icon_modal_profil3.picture_src}
            alt={icon_modal_profil3.description_alt}
            text_modal_profil3={text_modal_profil3.all_text}
            date_modal_profil3={date_modal_profil3.all_text}
            modal_finish={modal_finish.all_text}
            CloseModal={this.showModalProfil3}
          />
        </div>
      </>
    );
  }
}

export default IconTextProfil;
