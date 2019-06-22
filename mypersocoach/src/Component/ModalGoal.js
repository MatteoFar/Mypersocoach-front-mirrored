import React from "react";

import './Problem.css';


const ModalGoal  = ({src, show, handleClose, text2}) => {
 const showHideClassname = show ? "modal-display-block" : "modal-display-none";
  
return(
    <div className={showHideClassname}>
    <div className="modal_Cards" >
    <div className="Problem_modal">
    <img className="icon_problem"  alt="icon_problem" src={src}/>
    <p>{text2}</p>
    <button type="button" name ="C'est parti !">C'est parti !</button>
    <button onClick={handleClose}>Fermer</button>
    </div>
    </div>
    </div>
    
    )

}


export default ModalGoal;