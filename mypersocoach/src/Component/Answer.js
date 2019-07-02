import React from "react";
// import "./Answer.css"


const Answer = ({ response,text_static2 }) => {
  return (
    <div className="answer_container">
      <>
        <textarea id="textarea" name="textarea" maxlength="300" placeholder={text_static2.all_text}>
          {response}
        </textarea>
      </>
    </div>
  );
};

export default Answer;
