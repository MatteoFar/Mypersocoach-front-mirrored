import React from "react";
import './Problem.css';
import ModalGoal from "./ModalGoal";

class Modal extends React.Component {

    state = { 
        show: false ,
       };
 
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

render(){


return(

 <div>
     <div className="modal_container">
        <div className="display-modal">
        <img className="image_icon" onClick={this.showModal} alt="icon" src={this.props.icon} />
 
        <p className="text">{this.props.text1}</p>
 
        <ModalGoal text2={this.props.text2} src={this.props.icon} show={this.state.show} handleClose={this.hideModal} />
    </div>
 </div>
 
</div>

)
}
}

export default Modal;