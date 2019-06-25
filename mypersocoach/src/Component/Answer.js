import React from "react";
import "./Answer.css"

class Answer extends React.Component {
  state = {
    answer : [],
  }

  
  render() {
  return (
    <div className="logoTextEnvironment">
      <textarea placeholder="Commence à écrire"></textarea>
    </div>
  );
};
}

export default Answer;
