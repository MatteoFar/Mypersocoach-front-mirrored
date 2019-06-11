import React from 'react';
import BackgroundLogin from './BackgroundLogin';
import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

const Login = () => {
  return (
    
    <div id="grid_login">
      <BackgroundLogin/>
        <section className="blue_bg">
            <form method="post" action="#"> 
                <div id="form">
                    <p>
                        <input type="email" name="email" placeholder="Email" />
                    </p>
                    <p>
                        <input type="password" id="password" name="password" placeholder="Mot de passe" />
                    </p>
                    
                    <p>
                        <input className="btn_forward" type="submit" name="login" value="Login" />
                    </p>
                    <p className="white_text">Tu as déjà un compte ?</p>
                    <p>
                        <input className="btn_back" type="button" name="texte" value="Sign Up" />
                    </p>
                    
               </div>
            </form>
        </section>
        <footer className="blue_bg"></footer>   
    </div>

  );
}

export default Login;