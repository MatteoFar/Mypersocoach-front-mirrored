import React, { useEffect, useState, useRef } from "react";
import "./Problem.css";
import ModalGoal from "./ModalGoal";

const nl2br = require("react-nl2br");

const Modal = ({ id, text1, text2, icon, alt }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = () => {
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
    
    <div className="displayModalCentered">
      <div
        className="image_icon"
        ref={node}
        onClick={e => setOpen(!open)}
        key=""
      >
        <div>
          <img
            onClick={e => handleChange(id, text1, text2, icon)}
            src={icon}
            alt={alt}
          />
        </div>
      </div>

      

        <p>{text1}</p>
        <div className="modalTest" ref={node} onClick={e => setOpen(!open)}>
          {open && (
            <ModalGoal
              id={id}
              text2={nl2br(text2)}
              src={icon}
              alt={alt}
              show={setOpen}
            />
          )}
        </div>
    </div>

    
       
        </>
  );
};

export default Modal;
