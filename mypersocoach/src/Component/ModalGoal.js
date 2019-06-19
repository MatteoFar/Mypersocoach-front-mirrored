import React from "react";

import './Problem.css';


const ModalGoal  = ({src, show, handleClose}) => {
 const showHideClassname = show ? "modal-display-block" : "modal-display-none";
  
return(
    <div className={showHideClassname}>
    <img className="icon_problem"  alt="icon_problem" src={src}/>
    <p></p>
    <button type="button"  name ="C'est parti !">C'est parti !</button>
    <button onClick={handleClose}>Fermer</button>
    </div>
    
    )

}


export default ModalGoal;