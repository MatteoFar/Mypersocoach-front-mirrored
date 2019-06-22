import React from "react";
import './Problem.css';


class HeadingText extends React.Component {

    state = {
      
      headingText1 : [],
      headingText2 : [],
      headingText3 : []
    }
  
    getHeadingText1 = () => {
        fetch('http://localhost:3004/text_static/1')
          .then(res => res.json())
          .then(data => {
            this.setState({ headingText1 : data[0] })
          })
      }
  
      getHeadingText2 = () => {
        fetch('http://localhost:3004/text_static/108')
          .then(res => res.json())
          .then(data => {
            this.setState({ headingText2 : data[0] })
          })
      }

      getHeadingText3 = () => {
        fetch('http://localhost:3004/text_static/109')
          .then(res => res.json())
          .then(data => {
            this.setState({ headingText3 : data[0] })
          })
      }


    componentDidMount(){
      this.getHeadingText1()
      this.getHeadingText2()
      this.getHeadingText3()
    }
    
    render() {
        
      
      return (

<div>
        <div className="header_mainProb">
        <p>{this.state.headingText1.all_text}</p>
        </div>

        <p>{this.state.headingText2.all_text}</p>
            
          <div>      
          <p>{this.state.headingText3.all_text}</p>
          </div>
         
       </div>
)


    }
  }

export default HeadingText;
