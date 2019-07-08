import React from "react";
import "./OriginResponse.css"

const OriginResponse = ({ response,headingResponse,headingResponse2,headingResponse3,headingResponse4 }) => {
  
 
  
  return (
    <div className="OriginResponse">

     <div className="responseArea">
       <h3 className="titleOriginResponse"> {headingResponse}</h3>    
       <p>{response}</p>
     </div>

     <div className="responseArea">
       <h3 className="titleOriginResponse">{headingResponse2}</h3>    
       <p>{response}</p>
     </div>

     <div className="responseArea">
       <h3 className="titleOriginResponse">{headingResponse3}</h3>    
       <p>{response}</p>
     </div>

     <div className="responseArea">
       <h3 className="titleOriginResponse">{headingResponse4}</h3>    
       <p>{response}</p>
     </div>
      
    </div>
  );
};

export default OriginResponse;