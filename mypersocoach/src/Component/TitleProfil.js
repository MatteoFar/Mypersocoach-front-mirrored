import React from "react";
import "./TitleProfil.css"

const TitleProfil = ({ title_profil,title_profil2,title_profil3}) => {
  return (
    <div className="title_profil">
      <p>{title_profil}{title_profil2}{title_profil3} </p>
      

     
    </div>
  );
};

export default TitleProfil;