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


class Login extends React.Component {
    render() {

        return (
            <div id="grid_login">
            <BackgroundLogin/>
            
                <section className="blue_bg">

                    <form method="post" action="#"> 
                        <div id="form">
                            <div>
                                <input type="email" name="email" placeholder={textLogin.text_email} />
                            </div>

                            <div>
                                <input type="password" id="password" name="password" placeholder={textLogin.text_password} />
                            </div>
                            
                            <div>
                                <input className="btn_forward btn_small" type="submit" name="login" value={textLogin.text_login} />
                            </div>

                            <div className="height30"></div>
                            
                            <p className="white_text">{textLogin.text}</p>
                            
                            <div>
                                <input className="btn_back btn_small" type="button" name="texte" value={textLogin.text_signup} />
                            </div>
                            
                        </div>
                    </form>
                </section>
                <footer className="blue_bg"></footer>   
            </div>
        );
    }
}

export default Login;