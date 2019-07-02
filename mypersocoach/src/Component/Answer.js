import React from "react";
import "./Answer.css"
import axios from "axios";

class Answer extends React.Component  {
  
// state= {
//   textarea: ''
// }
// les props : ({summaryId, response,text_static2,text_static })

// onChange = (e) => {
//     this.setState({[e.target.name]: e.target.value });
// }



  
  render() {
  
    return (
      <div className="answer_container">
      <>
        <textarea id="textarea" name="textarea" maxlength="300" placeholder={this.props.text_static2.all_text}>
        {this.props.response}

        </textarea>
      </>
    </div>
  );
  }
};

export default Answer;
