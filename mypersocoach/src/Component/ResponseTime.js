import React from "react";
import "./ResponseAction.css"

const ResponseTime = ({ response }) => {
  return (
     <div className="ResponseAction">
       <p>{response}</p>
     </div>
  );
};

export default ResponseTime;
