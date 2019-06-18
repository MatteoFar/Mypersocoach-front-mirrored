import React from "react";
import './Problem.css';

const ModalMainTheme = () =>{
    const showHideClassname = show ? "modal-display-block" : "modal-display-none";
  
return (<div className="Problem_modal">
<img className="icon_problem" alt="icon_problem" src={iconProblem.picture_src}/>
<p>{iconProblem.all_text}</p>
<button type="button" name ="C'est parti !">C'est parti !</button>
</div>)
}

export default ModalMainTheme;