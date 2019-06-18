import React from "react";
import './Problem.css';

class DisplayModal extends React.Component {

state = {

    text_intro: []

}

getText = () => {
    fetch('http://localhost:3003/main_theme')
        .then(res => res.json())
        .then(data => {
            this.setState({ text_intro : data })
        })
   
    }

componentDidMount(){
    this.getText()
  }
  
  render() { 
return (
    <div className="modal_container">
    <div className="display-modal">
      <div className="button" >
        {this.state.text_intro.map(content => (
          <div >
            <img className="image_icon" alt="icon" src={content.picture_src} />
            <p className="text">{content.all_text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>

)

  }
}
export default DisplayModal;