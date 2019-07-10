import React from 'react';
import LoginForm from '../Component/LoginForm';
import BackgroundLogin from '../Component/BackgroundLogin';

import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';


class LoginScreen extends React.Component {
  render() {
    return (
      <div className="page_width_height blue_bg"> 
        <div className="padding_height">
          <BackgroundLogin/>
        </div>
        <LoginForm/>
      </div>
    );
  }
}

export default LoginScreen;