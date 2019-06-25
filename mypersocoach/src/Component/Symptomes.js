import React from "react";

import "../Component/Symptomes.css";

const Symptomes = ({ problem }) => {
  return (
    <div className="iconsSymptom3">
      {/* {problem.map(problem => (  */}
      <button className="iconLinkSymptom3">
        <img
          href="#"
          className="imageIconSymptom3"
          alt="icon"
          src={problem.picture_src}
        />

        <p className="textSymptom3">{problem.all_text}</p>
      </button>
      
    </div>
  );
};

export default Symptomes;
