import React from 'react';
import Background_login from './Background_login';
import '../Component/Login_form.css';

const Login = () => {
  return (
      <body>
    <div id="grille">
      <Background_login/>
        <section>
            <form method="post" action="#">
                <div id="formulaire">
                    <p>
                        <input type="email" name="email" placeholder="Email" />
                    </p>
                    <p>
                        <input type="password" id="password" name="password" placeholder="Mot de passe" />
                    </p>
                    
                    <p>
                        <input type="submit" name="login" value="Login" />
                    </p>
                    <p class="white">Tu as déjà un compte ?</p>
                    <p>
                        <input type="button" name="texte" value="Sign Up" />
                    </p>
               </div>
            </form>
        </section>
        <footer></footer>   
    </div>
</body>
  );
}

export default Login;