import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./Source2.css";
// import { stat } from "fs";

const headingIcons3 = [
  {
    image: require("../Pages/logo_heading2.png")
  }
];
const headingTexts3 = [
  {
    text: `Voici des raisons qui pourraient expliquer l'origine du problème. Y en a-t-il une qui te semble correcte ?`
  }
];
const iconProblems3 = [
  {
    icon: require(`../Pages/logo_environment.png`),
    text: `Mon environnement`
  },
  {
    icon: require(`../Pages/logo_behavior.png`),
    text: `Mon comportement`
  },
  {
    icon: require(`../Pages/logo_capacity.png`),
    text: `Mes capacités`
  },
  {
    icon: require(`../Pages/logo_conviction.png`),
    text: `Mes croyances et valeurs`
  }
  
];

const modalText = [{
     text: `Il faut prendre le temps de réfléchir...`,
     text1: `Selon toi, qu'est-ce qui est à l'origin de ce problème?`
}]
class Source2 extends React.Component {
  state = {
    count: 30,
    modal : true
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : null,
      })
       if(this.state.count === 0){
         this.setState({ modal: !this.state.modal})
       } else if (this.state.modal === false) {
        this.setState({
          count: newCount === null,
        })
       }
    }, 1000);
  }

  format(time) {
    let seconds = time % 31;
    return seconds;
  }

  Showmodal = () => {
    this.setState({  modal: !this.state.modal  })
    if( this.state.modal === true) {
      return console.log("true")
    } else {
      console.log("false")
    }
  }


  render() {
    const {count} = this.state;
    const modal = this.state.modal ? 'modal_main' : 'modaloff' ;
    // // let modal = this.state.count === 0 ? 'modaloff' : 'modal_main' ; 
  return (
  
    <div className="containersource2">
      <div className="logoTextSymptome3">
        {headingIcons3.map(headingIcon3 => (
          <img className="image_icon" alt="icon" src={headingIcon3.image} />
        ))}
        {headingTexts3.map(headingText3 => (
          <p> {headingText3.text} </p>
        ))}
      </div>
      <div className="icons">
        {iconProblems3.map(iconProblem2 => (
          <button className="iconLink">
            <img href="#" className="image_icon" alt="icon" src={iconProblem2.icon} />
            <p className="text">{iconProblem2.text}</p>
          </button>
        ))}
       
      </div>
     
     <button href="#" className="button_source2">Je ne suis pas sûr</button>


    <div className= {modal}>
    <div>
      {modalText.map(modalTexts => (
        <div className="modal_text">
        <div>
          <p>{modalTexts.text}</p>
          <p>{modalTexts.text1}</p>
        </div>
          <div className="count">
          {this.format(count)}
          </div>
          <div className="pass" onClick= {this.Showmodal}>
            <p>Passer ></p>
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
     )}};


export default Source2;
