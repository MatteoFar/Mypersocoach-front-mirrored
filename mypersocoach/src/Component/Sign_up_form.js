import React from 'react';
import Background_login from './Background_login';
import '../Component/Login_form.css';

const Signup = () => {
    return (
      
      <div id="grille">
      <Background_login/>

      <section>
            
            <form method="post" action="#">
                <div id="formulaire">
                    <p className="white">Choisis ton identifiant et ton mot de passe</p>
                    
                    <p>
                        <input type="email" name="email" placeholder="Email" />
                    </p>

                    <p>
                        <input type="password" id="password" name="password" placeholder="Mot de passe" />
                    </p>

                    <div className="height20"></div>

                    <p className="white">Remplis ces quelques informations complémentaires</p>
                    
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
                        <input type="submit" name="signup" value="Sign Up" />
                    </p>

                </div>
            </form>
            
        </section>
        <footer></footer>  

      </div>
    );
  }

export default Signup;