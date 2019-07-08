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
import OriginResponse from "../Component/OriginResponses";


class Reformulation extends React.Component {
  state = {

    icon: [],
    text_static: [],
    text_static2: [],
    headingResponse: [],
    headingResponse2: [],
    headingResponse3: [],
    headingResponse4: []
  };

  getHeader = async () => {
    
    const res= await axios.get("http://localhost:3001/icon/31")
        this.setState({ icon: res.data[0] });
      
  };
 
  getTextStatic = async () => {
    const res= await axios.get("http://localhost:3001/text_static/15")
        this.setState({ text_static: res.data[0] });
      
  };
  getTextStatic2 = async () => {
    const res= await axios.get("http://localhost:3001/text_static/29")
        this.setState({ text_static2: res.data[0] }); 
  };

  getHeadingResponse = async () => {
    const res= await axios.get("http://localhost:3001/text_static/30")
        this.setState({ headingResponse: res.data[0] }); 
  };

  getHeadingResponse2 = async () => {
    const res= await axios.get("http://localhost:3001/text_static/31")
        this.setState({ headingResponse2: res.data[0] }); 
  };

  getHeadingResponse3 = async () => {
    const res= await axios.get("http://localhost:3001/text_static/32")
        this.setState({ headingResponse3: res.data[0] }); 
  };

  getHeadingResponse4 = async () => {
    const res= await axios.get("http://localhost:3001/text_static/33")
        this.setState({ headingResponse4: res.data[0] }); 
  };


    // getResponse = async () => {
      
      
    //   const id = this.props.location.state.lastId;
    //   console.log('mon id affiche t elle', id)
    //   const res= await axios.get(`http://localhost:3001/response/${id}`)
          
    //   console.log('response where are you', res.data[0].response_summary )
    //   this.setState({ 
    //     response: res.data[0].response_summary});
    //   console.log('where is ma response Id', res.data[0].id)
    //   this.setState({responseId: res.data[0].id});
    // };




  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    this.getTextStatic2();
    this.getHeadingResponse();
    this.getHeadingResponse2();
    this.getHeadingResponse3();
    this.getHeadingResponse4();

    // this.getResponse();
  }

   render() {
    // console.log("voila ma state", this.state)
   
    const{icon, text_static, response,text_static2,
         headingResponse,headingResponse2,headingResponse3,
         headingResponse4, responseId} = this.state

    return (
      <div className="containerS2">
      <div className="containerSymptome2">
        <IconMain icon={icon.picture_src} />
        <HeadingText text_static={text_static.all_text} /> 
        <div className="ResponseContainer">
           <ResponseSymptome2 response={response}/>
        </div>
        <HeadingText text_static={text_static2.all_text} /> 
        <OriginResponse headingResponse={headingResponse.all_text} 
         headingResponse2={headingResponse2.all_text}
         headingResponse3={headingResponse3.all_text}
         headingResponse4={headingResponse4.all_text} />
        <ForwardStep/>
        <BackSubmit />
      </div>
      </div>
    );
  }
}
export default Reformulation;