import React from 'react';
import BackgroundLogin from './BackgroundLogin';
import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

const textLogin = 
    {
        text : "Tu as déjà un compte ?",
        text_email : "Email",
        text_password : "Mot de passe",
        text_login : "Login",
        text_signup : "Sign Up"
    }


const Login = () => {
  return (
    
    <div id="grid_login">
      <BackgroundLogin/>
      
        <section className="blue_bg">

            <form method="post" action="#"> 
                <div id="form">
                    <p>
                        <input type="email" name="email" placeholder={textLogin.text_email} />
                    </p>
                    <p>
                        <input type="password" id="password" name="password" placeholder={textLogin.text_password} />
                    </p>
                    
                    <p>
                        <input className="btn_forward btn_small" type="submit" name="login" value={textLogin.text_login} />
                    </p>
                    <p className="white_text">{textLogin.text}</p>
                    <p>
                        <input className="btn_back btn_small" type="button" name="texte" value={textLogin.text_signup} />
                    </p>
                    
               </div>
            </form>
        </section>
        <footer className="blue_bg"></footer>   
    </div>

  );
}

export default Login;