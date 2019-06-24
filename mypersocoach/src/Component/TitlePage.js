import React from "react";
import "./TitlePage.css"

const TitlePage = ({ problem_origin }) => {
  return (
    <div className="iconTextEnvironment">
      <>
        <img src={problem_origin.picture_src} />
        <p className="textEnvironment">{problem_origin.all_text}</p>
      </>
    </div>
  );
};

export default TitlePage;
