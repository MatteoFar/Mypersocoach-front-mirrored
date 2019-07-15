import React from "react";
import ModalCounter from "../Component/ModalCounter"
import HeadingText from "../Component/HeadingText";
import IconMain from "../Component/IconMain";
import Origins from "../Component/Origins"
import axios from "axios"
import "./Source2.css"
import { withRouter } from "react-router-dom";




class Source2 extends React.Component {
  state = {
    icon: [],
    text_static: [],
    problem_origin: [],
    text_static1: [],
    text_static3: [],
    summaryId : ""
  };


 

  getHeader = async () => {
    const res= await axios.get("http://localhost:3001/icon/6")
    this.setState({ icon: res.data[0] })
     

      // Allow us to clear the local storage to set the value of idResCroyance, idRespenvriionnement ... to 0
    
      localStorage.clear();   

  };
  

  getTextStatic = async () => {
    const res= await axios.get("http://localhost:3001/text_static/16")
    this.setState({ text_static: res.data[0] })
     
  };

  getOriginProblem = async () => {
    const res= await axios.get("http://localhost:3001/problem_origin/")
    this.setState({ problem_origin: res.data })
      
  };

  getTextStatic2 = async () => {
    const res= await axios.get("http://localhost:3001/text_static/17")
    this.setState({ text_static1: res.data[0] })
      
      console.log(res)
  };
  getTextStatic3 = async () => {
    const res= await axios.get("http://localhost:3001/text_static/56")
    this.setState({ text_static3: res.data[0] })
      
      console.log(res)
  };


  handleClick = () => {
    
    // redirection to source2 envrionnement when click on "Je ne suis pas sûr" button 
   
     this.props.history.push({
         pathname: "/Source2environment", 
         state: {summaryId: this.props.summaryId}
         });
     
        }


  componentDidMount() {
    this.getTextStatic();
    this.getHeader();
    this.getOriginProblem();
    this.getTextStatic2();
    this.getTextStatic3();

  }

  render() {
    // console.log("summaryId es-tu là", this.props.summaryId)
    // console.log('map de origin est la ', this.state.problem_origin);
    
    
    const {icon, text_static, problem_origin,text_static1,text_static3}=this.state
  return (
    <div className="containersource2">
     <ModalCounter text_static1={text_static1.all_text} text_static3={text_static3.all_text}/>
     <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
     <HeadingText text_static={text_static.all_text}/>
     <div className="icons">
     {problem_origin.map(problem_origins => (
      <Origins summaryId={this.props.location.state.summaryId} problem_origins={problem_origins}/>
      ))}
      </div>
     <button href="#" className="button_source2" onClick={this.handleClick}>Je ne suis pas sûr</button>
    </div>
     )}
    
    
    };


export default withRouter(Source2);
