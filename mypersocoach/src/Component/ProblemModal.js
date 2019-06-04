import React from "react";
import Popup from "reactjs-popup";

const ProblemModal = () => (
  <div className="example-warper">
    <Popup
      trigger={<button className="button"> Bottom Center </button>}
      position="bottom center"
      on="hover"
    >
      <Card title="Bottom Center" />
    </Popup>
  </div>
);
const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title} position </div>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
      sapiente labore architecto exercitationem optio quod dolor cupiditate
    </div>
  </div>
);

export default ProblemModal;
