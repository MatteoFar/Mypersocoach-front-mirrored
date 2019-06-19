import React from "react";
import './Problem.css';

class DisplayModal extends React.Component {

state = {

    text_prob: [],
    question: []
}

getText = () => {
  fetch('http://localhost:3003/main_theme')
        .then(res => res.json())
        .then(data => {
            this.setState({ text_prob : data })
        })
   
}

getQuestion = () => {
  fetch('http://localhost:3003/text_static/105')
  .then(res => res.json())
  .then(data => {
      this.setState({ question : data })
  })

}


componentDidMount(){
  this.getQuestion()
  this.getText()
}


  


  render() { 


    return (
    
  
    <div>
     <p>{this.state.question.map(question => (<p>{question.all_text}</p>))}</p>

    <div className="modal_container">
    <div className="display-modal">
      <div className="button" >
        {this.state.text_prob.map(content => (
          
          
          <div >
           
            <img className="image_icon" alt="icon" src={content.picture_src} />
            <p className="text">{content.all_text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
)

  }
}

export default DisplayModal;