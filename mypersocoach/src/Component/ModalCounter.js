import React from "react";

//import {ButtonToolbar,Button } from 'reactstrap';
import "./MondalCounter.css";
// import { stat } from "fs";


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
     )}};


export default Source2;
