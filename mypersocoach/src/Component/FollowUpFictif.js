import React from "react";

import "../Component/IconFictif.css";

const IconFictif = ({
   
  icon10,
  text_static10
})=>{

return (
    <div className="logo_container">
          <button className="icon_text_profil2">
            <img
              className="size_icon_profil2"
              src={icon10} 
              alt={icon10} 
            />
            <p className="size_text_profil">
              {text_static10}
              
            </p>
         </button>
        </div>
)
}

export default IconFictif