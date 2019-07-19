import React from "react";
import "./MondalCounter.css";


class ModalCounter extends React.Component {
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
    
  }


  render() {
    
    const {count} = this.state;
    const modal = this.state.modal ? 'modal_main' : 'modaloff' ;
    
  return (
    <div className= {modal}>
    <div>
        <div className="modal_text">
        <div>
          <p>{this.props.text_static1}</p>
        </div>
          <div className="count">
          {this.format(count)}
          </div>
          <div className="pass" onClick= {this.Showmodal}>
            <p>{this.props.text_static3}</p>
          </div>
        </div>
      </div>
    </div>
     )}};


export default ModalCounter;
