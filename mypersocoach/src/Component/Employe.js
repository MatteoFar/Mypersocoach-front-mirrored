import React from "react";

import harry_mpc from "../harry_mpc.jpeg"

import "./Employe.css"

const Employe = () => {
  return (
    <div className="grid_photo_name">
    
      <img className="format_photo" src={harry_mpc} alt="harry_picture"/> 
    
    
      <p className="employe_name">NOM PRENOM</p>
    </div>
    
  );
};

export default Employe;