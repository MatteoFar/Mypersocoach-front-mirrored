import React from "react";
import axios from "axios";
import {NavLink, Redirect} from "react-router-dom";

// import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

//  const textLogin = 
//      {
//         text : "Tu n'as pas de compte ?",
//         text_email : "Email",
//         text_password : "Mot de passe",
//         text_login : "Login",
//         text_signup : "Sign Up"
//      }

class Login extends React.Component {

    state = {
        text_static2: [],
        text_static3: [],
        text_static4: [],
        text_static5: [],
        text_static6: [],
        errors: null,
        isLogged: false
    }

    getPlaceholderMail = async () => {
        const res = await axios.get("http://localhost:3001/text_static/134")
        this.setState({ text_static2: res.data[0] });
    }

    getPlaceholderMdp = async () => {
        const res = await axios.get("http://localhost:3001/text_static/135")
        this.setState({ text_static3: res.data[0] });
    }
    
    getValide = async () => {
        const res = await axios.get("http://localhost:3001/text_static/133")
        this.setState({ text_static4: res.data[0] });
    }

    getText = async () => {
        const res = await axios.get("http://localhost:3001/text_static/143")
        this.setState({ text_static5: res.data[0] });
    }

    getSignup = async () => {
        const res = await axios.get("http://localhost:3001/text_static/112")
        this.setState({ text_static6: res.data[0] });
    }

    // Affichage du message d'erreur
    setMessageError = (er) => {
        this.setState({ errors: er });
        setTimeout(() => {
            this.setState({
                errors: false
            });
        }, 4000);
    }

    componentDidMount() {
        this.getPlaceholderMail();
        this.getPlaceholderMdp();
        this.getValide();
        this.getText();
        this.getSignup()
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const password_send = e.target.password.value;
        const email_send = e.target.email.value;

        // On a besoin de this pour setter le state - error -
        // Mais son scope ne passe pas le then retour de la function axion
        // Soit, var nous permet de persiter le scope d'une variable
        var self = this;
        
        // Pas de forme vide soumise.
        if (password_send === '' && email_send === '') { this.setMessageError("Vous devez renseigner vos crédentials."); return; }
        if (password_send === '' && email_send != '') { this.setMessageError("Le mot de passe ne peut pas etre vide."); return; }
        if (email_send === '' && password_send != ''){ this.setMessageError("L\'email ne peut pas etre vide."); return; }

        // On lance le log utilisateur
        axios.post('http://localhost:3003/login', {
            email: email_send,
            password: password_send,
        })
        .then(function (res) {
            // On set le message retour dans le state error
            const mgs = `${res.data}`;
            self.setMessageError(mgs)
            if (mgs === "Utilisateur connecté.") {
                self.setState({ isLogged: true });
            }
        })
        .catch(function (error) {
            console.log('Désolé, erreur systeme.');
        });
    }

    render() {

        if (this.state.isLogged) {
            return <Redirect to='/start'  />
        }
    
        const {text_static2,text_static3,text_static4,text_static5,text_static6} = this.state
        return (
            <div id="grid_login">
            {/* <BackgroundLogin/> */}
                <section>
                    {/* handleSubmit pour soumettre les informations sur la Form*/}
                    <form method="post" action="#" onSubmit={this.handleSubmit}> 
                        <div id="form">
                            {/* Gestion des messages d'erreurs */}
                            <div className="message-login">
                                { this.state.errors != null &&
                                    <h3>{ this.state.errors } </h3>
                                }
                            </div>
                            {/* Element forms */}
                            <div>
                                <input type="email" name="email" placeholder={text_static2.all_text} />
                            </div>
                            <div>
                                <input type="password" id="password" name="password" placeholder={text_static3.all_text} />
                            </div>
                            <div>
                                <button className="button_forward " type="submit" name="login">{text_static4.all_text}</button>
                            </div>
                            <div className="height30"></div>
                            <p className="white_text">{text_static5.all_text}</p>
                            {/* Lien page d'enregistrement utilisateur */}
                            <NavLink to="/sign-up">
                                <button  className="button_signup" type="button" name="texte">{text_static6.all_text}</button>
                            </NavLink>
                        </div>
                    </form>
                </section>
                {/* <footer className="blue_bg"></footer>    */}
            </div>
        );
    }
}

export default Login;