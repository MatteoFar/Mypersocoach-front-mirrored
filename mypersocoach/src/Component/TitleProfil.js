import React from "react";
import "./TitleProfil.css"

const TitleProfil = ({ title_profil}) => {
  return (
    <div className="title_profil">
      <p>{title_profil} </p>
    </div>
  );
};

export default TitleProfil;