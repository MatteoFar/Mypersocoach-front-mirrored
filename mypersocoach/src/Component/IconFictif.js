import React from "react";

import "../Component/IconFictif.css";

const IconFictif = ({

  
  icon11,
  text_static11,
  icon12,
  text_static12,
  icon13,
  text_static13,
  icon14,
  text_static14,
  icon15,
  text_static15
}) => {

    return (
        <>
        {/* <div className="logo_container">
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
        </div> */}


    
        <div className="logo_fictif_container">
          <button className="icon_text_profil2">
           <img
              className="size_icon_profil2"
              src={icon11} //src={icon11}src={icon12}src={icon13}src={icon14}src={icon15}
              alt={icon11} //alt={icon11}alt={icon12}alt={icon13}alt={icon14}alt={icon15}
            />
            <p className="size_text_profil">{text_static11}</p>
          </button>
          
          
          <button className="icon_text_profil2">
            <img
              className="size_icon_profil2"
              src={icon12} //src={icon11}src={icon12}src={icon13}src={icon14}src={icon15}
              alt={icon12} //alt={icon11}alt={icon12}alt={icon13}alt={icon14}alt={icon15}
            />
            <p className="size_text_profil">{text_static12}</p>
          </button>
        

        <button className="icon_text_profil2">
            <img
              className="size_icon_profil2"
              src={icon13} //src={icon11}src={icon12}src={icon13}src={icon14}src={icon15}
              alt={icon13} //alt={icon11}alt={icon12}alt={icon13}alt={icon14}alt={icon15}
            />
            <p className="size_text_profil">{text_static13}</p>
          </button>
        
        <button className="icon_text_profil2">
        <img
          className="size_icon_profil2"
          src={icon14} //src={icon11}src={icon12}src={icon13}src={icon14}src={icon15}
          alt={icon14} //alt={icon11}alt={icon12}alt={icon13}alt={icon14}alt={icon15}
        />
        <p className="size_text_profil">{text_static14}</p>
      </button>

        </div> 
      <button className="icon_text_profil2">
        <img
          className="size_icon_profil2"
          src={icon15} //src={icon11}src={icon12}src={icon13}src={icon14}src={icon15}
          alt={icon15} //alt={icon11}alt={icon12}alt={icon13}alt={icon14}alt={icon15}
        />
        <p className="size_text_profil">{text_static15}</p>
      </button>
      </>
    )
}
export default IconFictif;
