import React from "react";

const NoButton = [
  {
    text: "Non"
  }
];
class NextStep extends React.Component {
  render() {
    return (
      <>
        {NoButton.map(No => (
          <button href="#" className="buttonSource2No">
            {No.text}
          </button>
        ))}
      </>
    );
  }
}
export default NextStep;
