import React from "react";
import "./OriginResponse.css"

const OriginResponse = ({ headingResponse,headingResponse2,headingResponse3,headingResponse4,responseCroyance, responseCapacite, responseComportement,responseEnvironnement }) => {
  
 
  
  return (
    <div className="OriginResponse">

     <div className="responseArea">
       <h3 className="titleOriginResponse"> {headingResponse}</h3>    
       <p>{responseCroyance}</p>
     </div>

     <div className="responseArea">
       <h3 className="titleOriginResponse">{headingResponse2}</h3>    
       <p>{responseCapacite}</p>
     </div>

     <div className="responseArea">
       <h3 className="titleOriginResponse">{headingResponse3}</h3>    
       <p>{responseComportement}</p>
     </div>

     <div className="responseArea">
       <h3 className="titleOriginResponse">{headingResponse4}</h3>    
       <p>{responseEnvironnement}</p>
     </div>
      
    </div>
  );
};

export default OriginResponse;