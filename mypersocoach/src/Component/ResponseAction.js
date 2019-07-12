import React from "react";
import "./ResponseAction.css"

const ResponseAction = ({ response }) => {
  return (
     <div className="ResponseAction">
       <p>{response}</p>
     </div>
  );
};

export default ResponseAction;
