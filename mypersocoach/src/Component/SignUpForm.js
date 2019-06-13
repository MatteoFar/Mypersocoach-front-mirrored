import React from 'react';
import BackgroundLogin from './BackgroundLogin';
import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

const Signup = () => {
    return (
      
      <div id="grid_login">
      <BackgroundLogin/>

      <section className="blue_bg">
            
            <form method="post" action="#">
                <div id="form">
                    <p className="white_text">Choisis ton identifiant et ton mot de passe</p>
                    
                    <p>
                        <input type="email" name="email" placeholder="Email" />
                    </p>

                    <p>
                        <input type="password" id="password" name="password" placeholder="Mot de passe" />
                    </p>

                    <div className="height20"></div>

                    <p className="white_text">Remplis ces quelques informations complémentaires</p>
                    
                    <p>
                        <input type="text" name="firstname" placeholder="Prénom" />
                    </p>

                    <p>
                        <input type="text" name="lastname" placeholder="Nom" />
                    </p>

                    <p>
                        <input type="text" name="function" placeholder="Fonction" />
                    </p>

                    <p>
                        <input type="text" name="entreprise" placeholder="Entreprise" />
                    </p>

                    <p>
                        <input className="btn_forward btn_small" type="submit" name="signup" value="Sign Up" />
                    </p>

                </div>
            </form>
            
        </section>
        <footer className="blue_bg"></footer>  

      </div>
    );
  }

export default Signup;