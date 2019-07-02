import React from "react";
// import "./BackButton.css"

const BackButton = ({ text_static4 }) => {
    return (
      <div className="backbutton_container">
        {/* Vérifier si on met bien le type "reset" pour effacer les données */}
        {/* Retour vers l'écran "http://localhost:3000/symptome3" */}
        <button href="#" className="button_back" type="reset" name="return">{text_static4}</button>
      </div>
    );
  }

export default BackButton;
