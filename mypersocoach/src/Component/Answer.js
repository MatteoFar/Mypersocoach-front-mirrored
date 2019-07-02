import React from "react";
import "./Answer.css"


class Answer extends React.Component{

//  ({ response,text_static2,text_static }) => {
state = {
    textarea: '',
}

render(){
  
  console.log(this.state)
  
  return (
    <div className="answer_container">
      <>
        <textarea name="textarea" onchange= {this.props.controlFunct} value={this.props.content} maxlength="300" placeholder={this.props.text_static2.all_text}>
          {this.props.response}
        </textarea>
      </>
    </div>
  );
};

}

export default Answer;
