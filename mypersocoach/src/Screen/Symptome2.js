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
    response: '',
    responseId: '',
    text_static3:'',
    text_static4:''
  };

  getHeader = async () => {
    
    const res= await axios.get("http://localhost:3001/icon/1")
        this.setState({ icon: res.data[0] });
      
  };
 
  getTextStatic = async () => {
    const res= await axios.get("http://localhost:3001/text_static/15")
        this.setState({ text_static: res.data[0] });
      
  };


    getResponse = async () => {
      
      
      const id = this.props.location.state.summary_id;
      console.log("voici mon id", id)
      
      // console.log('mon id affiche t elle', id)
      const res= await axios.get(`http://localhost:3001/response/${id}`)
          
      // console.log('response where are you', res.data[0].response_summary )
      this.setState({ 
        response: res.data[0].response_summary});
      // console.log('where is ma response Id', res.data[0].id)
      this.setState({responseId: res.data[0].id});
    };

    
    getOk = async () => {
      const res = await axios.get("http://localhost:3001/text_static/118")
      this.setState({ text_static3: res.data[0] });
  };
  
  getNotSure = async () => {
    const res = await axios.get("http://localhost:3001/text_static/119")
    this.setState({ text_static4: res.data[0] });
};
    



  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    this.getResponse();
    this.getOk();
    this.getNotSure();
  }

   render() {
    console.log("voila ma state", this.state)
    console.log("ou est ma response elle a disparu", this.state.response)
   console.log("summary id es tu là ....", this.props.location.state.summary_id)
    const{icon, text_static, response, text_static3, text_static4} = this.state
    return (
      <div className="containerS2">
      <div className="containerSymptome2">
        <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
        <HeadingText text_static={text_static.all_text} /> 
        <ResponseSymptome2 response={response}/>
        <ForwardStep summaryId={this.props.location.state.summary_id} redirectionPage={"Source2"}  text_static3={text_static3.all_text} />
        <BackSubmit  text_static4={text_static4.all_text}/>
      </div>
      </div>
    );
  }
}
export default Symptome2;
