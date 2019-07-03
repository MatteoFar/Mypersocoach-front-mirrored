import React from "react";
import "./ResponseSymptome2.css"

const ResponseSymptome2 = ({ response }) => {
  
  console.log('ouistititi', response)
  
  return (
    <div className="Response">
      <p>CA S'AFFICHE PAS !!! C'EST CA MON PROBLEME !!</p>
      <p>{response}</p>
    </div>
  );
};

export default ResponseSymptome2;
