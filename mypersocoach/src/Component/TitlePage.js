import React from "react";
import "./TitlePage.css"

const TitlePage = ({ problem_origin }) => {
  return (
    <div className="iconTextEnvironment">
      <>
        <img className="icon_titlePage" src={problem_origin.picture_src} alt={problem_origin.description_alt}/>
        <p className="text_titlePage">{problem_origin.all_text}</p>
      </>
    </div>
  );
};

export default TitlePage;
