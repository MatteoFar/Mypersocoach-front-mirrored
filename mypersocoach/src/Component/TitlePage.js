import React from "react";

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
