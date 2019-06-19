import React from 'react';
import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';
import BackgroundLogin from '../Component/BackgroundLogin';
import LoginForm from '../Component/LoginForm';


const LoginScreen = () => {
    return (
      <div className="App"> 
        <LoginForm/>
      </div>
    );
  }

export default LoginScreen;