import React from "react"
import "./NotReally.css"

const NotReally = [
    {
      text: "Je ne suis pas sûr"
    }
  ];

  class ForwardAnnex extends React.Component {
    render() {
      return (
        <>
          {NotReally.map(NotReally => (
            <button href="#" className="button_not_really">
              {NotReally.text}
            </button>
          ))}
        </>
      );
    }
  }
  
  export default ForwardAnnex;
  