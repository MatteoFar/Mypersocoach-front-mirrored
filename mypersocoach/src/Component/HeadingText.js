import React from "react";
import './Problem.css';


class HeadingText extends React.Component {

    state = {
      
      headingText : []
    }
  
    getHeadingText = () => {
        fetch('http://localhost:3003/text_static/1')
          .then(res => res.json())
          .then(data => {
            this.setState({ headingText : data })
          })
      }
  
    componentDidMount(){
      this.getHeadingText()
    }
    
    render() {
        return (

<div>
        <div className="header_mainProb">
        {this.state.headingText.map(header => {
          return(
              <div>
                
                <p>{header.all_text}</p>
              </div>
            )
          })
        }
         </div>

</div>


        )


    }
}

export default HeadingText;