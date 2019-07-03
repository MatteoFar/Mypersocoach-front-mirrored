import React from "react";
import axios from "axios";

import "./Symptome2.css";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import FowardStep from "../Component/ForwardStep";
import NotReally from "../Component/NotReally";
import ResponseSymptome2 from "../Component/ResponseSymptome2"
import ForwardStep from "../Component/ForwardStep";
import BackSubmit from "../Component/BackSubmit";


class Symptome2 extends React.Component {
  state = {

    icon: [],
    text_static: [],
    response: ''
    
  };

  getHeader = async () => {
    
    const res= await axios.get("http://localhost:3001/icon/1")
        this.setState({ icon: res.data[0] });
      
  };
 
  getTextStatic = async () => {
    const res= await axios.get("http://localhost:3001/text_static/15")
        this.setState({ text_static: res.data[0] });
      
  };

  // getResponse = async () => {
  //   const id = this.props.location.state.lastId
  //   // console.log('ou est mon id', id)
  //   const res= await axios.get(`http://localhost:3001/response/${id}`)
  //       this.setState({ response : res.data.response_summary});
  //       // console.log('ilestoulerésultat', res.data.response_summary )
      
  // };

  loadResponseId = () => {
      const {responseId} = this.state
      axios.get(`http://localhost:3001/response`, {responseId: responseId})
        .then(res => {
          // console.log("test response", res);
          const responseId = res.data.summaryId
          this.setState({ responseId : responseId })
          // console.log('pouic pouic', this.state.response)
        })
    }
    getResponse = async () => {
      const id= this.props.location.state.lastResponseId
      console.log('mon id affiche t elle', id)
      const res= await axios.get(`http://localhost:3001/response/${id}`)
          console.log(' response à ma requête,', res.data[id -1].response_summary)
      
      this.setState({ response: res.data[id -1].response_summary });
        
    };




  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    this.getResponse();
    this.loadResponseId()
    
  }

   render() {
    
    //console.log('oho"ho"ho"hoh', this.props.location.state.lastResponseId)
    const{icon, text_static, response}= this.state
    return (
      <div className="containerS2">
      <div className="containerSymptome2">
        <IconMain icon={icon.picture_src} />
        <HeadingText text_static={text_static.all_text} /> 
        <ResponseSymptome2 response={response}/>
        <ForwardStep/>
        <BackSubmit />
      </div>
      </div>
    );
  }
}
export default Symptome2;
