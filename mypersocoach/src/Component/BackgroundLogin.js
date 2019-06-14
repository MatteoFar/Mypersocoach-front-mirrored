import React from 'react';
import './LoginForm.css';

const titlesH1 = [
  {
    text : "mypersocoach"
  },
]

const BackgroundLogin = () => {
  return (
        <header className="blue_bg header_login">
          {titlesH1.map(titleH1 => (
            <div>
              <h1 className="h1_login">{titleH1.text}</h1>
            </div>
            )
          )}
            
        </header>


  );
}

export default BackgroundLogin;