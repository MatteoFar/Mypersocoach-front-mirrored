import React from 'react';
import BackgroundLogin from './BackgroundLogin';
import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

const textSignup = 
    {
        text : "Choisis ton identifiant et ton mot de passe",
        text1 : "Remplis ces quelques informations complémentaires",
        text_email : "Email",
        text_password : "Mot de passe",
        text_firstname : "Prénom",
        text_lastname : "Nom",
        text_function : "Fonction",
        text_entreprise : "Entreprise",
        text_signup : "Sign Up"
    }


const Signup = () => {
    return (
      
      <div id="grid_login">
      <BackgroundLogin/>

      <section className="blue_bg">
            
            <form method="post" action="#">
                <div id="form">
                    <p className="white_text">{textSignup.text}</p>
                    
                    <div>
                        <input type="email" name="email" placeholder={textSignup.text_email} />
                    </div>

                    <div>
                        <input type="password" id="password" name="password" placeholder={textSignup.text_password} />
                    </div>

                    <p className="white_text">{textSignup.text1}</p>
                    
                    <div>
                        <input type="text" name="firstname" placeholder={textSignup.text_firstname} />
                    </div>

                    <div>
                        <input type="text" name="lastname" placeholder={textSignup.text_lastname} />
                    </div>

                    <div>
                        <input type="text" name="function" placeholder={textSignup.text_function} />
                    </div>

                    <div>
                        <input type="text" name="entreprise" placeholder={textSignup.text_entreprise} />
                    </div>

                    <div className="height15"></div>

                    <div>
                        <input className="btn_forward btn_small" type="submit" name="signup" value={textSignup.text_signup} />
                    </div>

                </div>
            </form>
            
        </section>
        <footer className="blue_bg"></footer>  

      </div>
    );
  }

export default Signup;