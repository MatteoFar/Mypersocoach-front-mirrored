import React from "react";

import avatar_potter from "../avatar_potter.png"

import "./Employe.css"

const Employe = () => {
  return (
    <div className="grid_photo_name">
    
      <img className="format_photo" src={avatar_potter} alt="harry_picture"/> 
    
    
      <p className="employe_name">NOM PRENOM</p>
    </div>
    
  );
};

export default Employe;