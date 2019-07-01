import React , { Component } from 'react';

import "../Component/IconMain.css"

const IconMain = ({ icon }) => {
  //"({icon})" est une props. 
  //Cette props est liée à son composant appelé dans une autre page 
  return (
    <div className="logo_container">
      <img src={icon} />
    </div>
  );
};

export default IconMain;
