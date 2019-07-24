import React from 'react';
import axios from "axios";

import SignUpForm from '../Component/SignUpForm';
import BackgroundLogin from '../Component/BackgroundLogin';

// import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

class SignScreen extends React.Component {
  
  state = {
    text_static: []
  }
  
  getTitleH1 = async() => {
    const res = await axios.get("http://localhost:3001/text_static/142")
    this.setState({text_static: res.data[0]});
  };
  
  componentDidMount() {
    this.getTitleH1()
  }
  
  render() {  

    const{text_static}= this.state
  
    return (
      <div className="page_width_height blue_bg">
        <BackgroundLogin text_static={text_static.all_text}/>
        
        <SignUpForm/>
      </div>
    );
  }
}

export default SignScreen;