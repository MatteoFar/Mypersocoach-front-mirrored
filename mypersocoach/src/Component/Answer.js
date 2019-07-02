import React from "react";
import "./Answer.css"
import axios from "axios";

class Answer extends React.Component  {
  

state = {
    textarea: '',
}




render(){
  
  console.log(this.state)
  
  return (
    <div className="answer_container">
      <>
        <textarea id="textarea" name="textarea" onchange= {this.props.controlFunct} value={this.props.content} maxlength="300" placeholder={this.props.text_static2.all_text}>
          {this.props.response}
        </textarea>
      </>
    </div>
  );
  }
};



export default Answer;
