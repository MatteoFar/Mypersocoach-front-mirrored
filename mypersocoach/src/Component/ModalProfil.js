import React from "react";

import "./ModalExample.css";

const nl2br = require("react-nl2br");

class ModalProfil extends React.Component {
  state = {
    modal_profil: true,
    show_modal:true
  };

 
  CloseModal = () => {
    this.setState({ modal_profil: false });
    this.props.CloseModal();
    
    
  };

  render() {
    const modal_profil = this.state.modal_profil ? "modal_main1" : "modaloff1";
   

    return (
      <>
        
        <div className={modal_profil}>
          <div className="modal_main1">
            <img className="belief_image" src={this.props.icon_modal_profil}/>
            <img className="belief_image" src={this.props.icon_modal_profil2}/>
            <img className="belief_image" src={this.props.icon_modal_profil3} alt={this.props.alt}
            />
            <p>{nl2br(this.props.text_modal_profil)}{nl2br(this.props.text_modal_profil2)}{nl2br(this.props.text_modal_profil3)}</p>
            <p>{this.props.date_modal_profil3}</p>
            <p onClick={this.props.CloseModal} className="pass_continue">
              {this.props.modal_finish}
            </p>
        </div>  
        </div>

        
      </>
    );
  }
}
export default ModalProfil;
