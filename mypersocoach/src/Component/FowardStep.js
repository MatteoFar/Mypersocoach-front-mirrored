import React from "react";

const YesButton = [
  {
    text: "Oui"
  }
];
class FowardStep extends React.Component {
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

export default FowardStep;
