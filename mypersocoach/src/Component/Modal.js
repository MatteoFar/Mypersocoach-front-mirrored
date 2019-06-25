import React from "react";
import './Problem.css';
import ModalGoal from "./ModalGoal";

const nl2br = require('react-nl2br');


class Modal extends React.Component {

    state = { 
      currentItemId:  undefined
    };

    showModal = (id) => {
      const currentItemId = id !== this.state.currentItemId ? id : undefined
      this.setState({ currentItemId })
    };
    

  hideModal = () => {
      this.setState({ show: false });
    };

render(){

console.log('modalplouc',this.props.id,this.props.text2,this.props.icon)

return(

 <div>
     
        <div >
        <img className="image_icon"  onClick={() => this.showModal(this.props.id)} alt="icon" src={this.props.icon} />
        {
          this.state.currentItemId === this.props.id ? (
  <ModalGoal text2={nl2br(this.props.text2)} src={this.props.icon} show={this.state.currentItemId} handleClose={this.hideModal} />
  ) : null}


        <p className="text">{this.props.text1}</p>
       
        
        </div>
 
 
</div>

)
}
}

// const ModalGoal  = ({src, show, handleClose, text2}) => {
//   const showHideClassname = show ? "modal-display-block" : "modal-display-none";
   
//  return(
//      <div className={showHideClassname} >
         
//      <div  className="modal_Cards" >
//      <div className="Problem_modal">
//      <img className="icon_problem"  alt="icon_problem" src={src}/>
//      <p>{text2}</p>
//      <button type="button" name ="C'est parti !">C'est parti !</button>
    
//      </div>
//      </div>
//      </div>
     
//      )
 
//  }
export default Modal;