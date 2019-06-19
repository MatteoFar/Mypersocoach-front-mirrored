import React from "react"

const NotReally = [
    {
      text: "Pas vraiment"
    }
  ];

  class ForwardAnnex extends React.Component {
    render() {
      return (
        <>
          {NotReally.map(NotReally => (
            <button href="#" className="button_symptom3">
              {NotReally.text}
            </button>
          ))}
        </>
      );
    }
  }
  
  export default ForwardAnnex;
  