import React from "react";
import axios from "axios";

import "./Symptome2.css";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";

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
    headingResponse4: [],
    responseCroyance:[],
    response:[],
    responseCapacite:[],
    responseComportement : [],
    responseEnvironnement: [],
    textButtonYes: [],
    textButtonNo:[]
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

  getTextbuttonYes = async () => {
    const res = await axios.get("http://localhost:3001/text_static/123");
    this.setState({ textButtonYes: res.data[0] });
    // .then(data => {
    //   this.setState({ text_static: data[0] });
    // });
  };
  getTextbuttonNo = async () => {
    const res = await axios.get("http://localhost:3001/text_static/124");
    this.setState({ textButtonNo: res.data[0] });
    // .then(data => {
    //   this.setState({ text_static: data[0] });
    // });
  };



  getResponse = async () => {
      
      
      const id = this.props.location.state.summaryId;
   
      const res= await axios.get(`http://localhost:3001/response/${id}`)
 
      this.setState({ response: res.data[0].response_summary})
    
      
        
      
      
    };

    getResponseCroyance = async () => {
      
      
     
      const idresp = localStorage.getItem('idRespCroyance')
     
      if (idresp === null) {
        return console.log('false')
      }
      else {
      const res= await axios.get(`http://localhost:3001/response/resp/${idresp}`)
          
    
      this.setState({ responseCroyance: res.data[0].response_summary})
      
    }
        
    
    }; 

    getResponseCapacite = async () => {
     
      
      const idresp = localStorage.getItem('idRespCapacite')
    
      if (idresp === null) {
        return console.log('false')
      }
      
      else {
      
      const res= await axios.get(`http://localhost:3001/response/resp/${idresp}`)
          
    
      this.setState({ responseCapacite: res.data[0].response_summary})
      
    }
        
      
    }; 


    getResponseComportement = async () => {
      
      const idresp= localStorage.getItem('idRespComportement')
     
      if (idresp === null) {
        return console.log('false')
      }
      else {
     
      const res= await axios.get(`http://localhost:3001/response/resp/${idresp}`)
          
     
      this.setState({ responseComportement: res.data[0].response_summary})
   
    
    }
       
    }; 


    getResponseEnvironnement = async () => {
      

      const idresp= localStorage.getItem('idRespEnvironnement')
      
     if (idresp === null) {
       return console.log('false')
     }
     else {
      
      const res= await axios.get(`http://localhost:3001/response/resp/${idresp}`)
         
      this.setState({ responseEnvironnement: res.data[0].response_summary})
      
    }
      
        
      
    }; 


    
  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    this.getTextStatic2();
    this.getHeadingResponse();
    this.getHeadingResponse2();
    this.getHeadingResponse3();
    this.getHeadingResponse4();

    this.getResponse();
    this.getResponseCroyance();
    this.getResponseCapacite();
    this.getResponseComportement();
    this.getResponseEnvironnement();
    this.getTextbuttonYes();
    this.getTextbuttonNo()
  }

   render() {
   
  
     
    
    const{icon, text_static, text_static2,
         headingResponse,headingResponse2,headingResponse3,
         headingResponse4, response, responseCroyance, responseCapacite, responseComportement, responseEnvironnement, textButtonYes, textButtonNo} = this.state
    
   
    

         return (
      <div className="containerS2 white">
      <div className="containerSymptome2">
        <IconMain icon={icon.picture_src} />
        <HeadingText text_static={text_static.all_text} /> 
        
          <div>
        <div className="ResponseContainer">
           <ResponseSymptome2 response={response}/>
        </div>
        <HeadingText text_static={text_static2.all_text} /> 
        <OriginResponse  headingResponse={headingResponse.all_text} 
         headingResponse2={headingResponse2.all_text}
         headingResponse3={headingResponse3.all_text}
         headingResponse4={headingResponse4.all_text}
         responseCapacite={responseCapacite}
         responseComportement = { responseComportement}
         responseCroyance={responseCroyance} 
         responseEnvironnement={responseEnvironnement}
         />
         </div>
        
        <ForwardStep redirectionPage={'solution1'} textButtonYes={textButtonYes.all_text}/>
        <BackSubmit summaryId={this.props.location.state.summaryId} redirectionPage={'source2'} textButtonNo={textButtonNo.all_text}/>
      </div>
      </div>
    );
  }
}
export default Reformulation;