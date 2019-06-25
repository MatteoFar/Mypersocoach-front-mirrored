import React, { useEffect, useState, useRef } from "react";
import './Problem.css';
import ModalGoal from "./ModalGoal";




const nl2br = require('react-nl2br');


const Modal = ({id, text1, text2, icon})  =>{

  const node = useRef();

  const [open, setOpen] = useState(false);

 
  
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };
  

  const handleChange = () => {
    setOpen(false);
  };


  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
  // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


 

return(

 <div>
     
     <div ref={node}  onClick={e => setOpen(!open)}>
        
        
        
        <div >
        
        <div>
        <img className="image_icon" onClick={e => handleChange(id, text1, text2, icon)} alt="icon" src={icon} />
       
        </div>
        {open && (<ModalGoal text2={nl2br(text2)} src={icon} show={setOpen} />)}
 
      <p className="text">{text1}</p>
       </div>
      
      </div>      
 
</div>

)
}


export default Modal;