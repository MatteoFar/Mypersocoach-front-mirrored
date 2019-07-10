import React from 'react';
import axios from "axios";

import LoginForm from '../Component/LoginForm';
import BackgroundLogin from '../Component/BackgroundLogin';

import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';



class LoginScreen extends React.Component {

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
        <div className="padding_height">
          <BackgroundLogin text_static={text_static.all_text}/>
        </div>
        
        {/* Voir quels sont les paramètres à ajouter dans le composant*/}
        <LoginForm/>
      </div>
    );
  }
}

export default LoginScreen;