import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./Symptome3.css";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import Symptomes from "../Component/Symptomes";
import ForwardAnnex from "../Component/ForwardAnnex";

const Symptome3 = () => {
  return (
    <div className="containerSymptom3">
      <IconMain />
      <HeadingText />
      <Symptomes />
      <ForwardAnnex />
      {/* </div> */}
    </div>
  );
};
export default Symptome3;
