import React from "react";
import './Problem.css';
const nl2br = require('react-nl2br');

class HeadingText extends React.Component {

    state = {
      
      headingText1 : [],
      
    }
  
    getHeadingText1 = () => {
        fetch('http://localhost:3004/text_static/1')
          .then(res => res.json())
          .then(data => {
            this.setState({ headingText1 : data[0] })
          })
      }
  
   


    componentDidMount(){
      this.getHeadingText1()
     
    }
    
    render() {
        
      
      return (

<div>
        <div className="header_mainProb">
        <p>{nl2br(this.state.headingText1.all_text)}</p>
        </div>
 </div>
)


    }
  }

export default HeadingText;
