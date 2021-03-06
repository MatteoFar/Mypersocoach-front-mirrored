import React from "react";
import "./TitlePageSympto.css"

const TitlePageSympto = ({ problem }) => {
  return (
    <div className="iconTextSympto">
      <>
        <img src={problem.picture_src} alt={problem.description_alt}/>
        <h1 className="h1">{problem.all_text}</h1>
      </>
    </div>
  );
};

export default TitlePageSympto;