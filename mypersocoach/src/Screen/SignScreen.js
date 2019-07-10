import React from 'react';
import SignUpForm from '../Component/SignUpForm';
import BackgroundLogin from '../Component/BackgroundLogin';

import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

class SignScreen extends React.Component {
  render() {  
  return (
      <div className="page_width_height blue_bg">
        <BackgroundLogin/>
        <SignUpForm/>
      </div>
    );
  }
}

export default SignScreen;