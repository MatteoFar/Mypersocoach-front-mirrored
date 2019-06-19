import React from "react";

const YesButton = [
  {
    text: "Oui"
  }
];
class ForwardStep extends React.Component {
  render() {
    return (
      <>
        {YesButton.map(Yes => (
          <button href="#" className="buttonSource2Yes">
            {Yes.text}
          </button>
        ))}
      </>
    );
  }
}

export default ForwardStep;
