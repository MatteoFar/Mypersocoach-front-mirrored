import React from 'react';
import axios from "axios";
import bcrypt from "bcryptjs";
import {NavLink} from "react-router-dom";
import { withRouter } from "react-router-dom";


// import '../Component/GeneralCss.css';
import '../Component/LoginForm.css';

// const textSignup = 
//     {
//          text : "Choisis ton identifiant et ton mot de passe",
//          text1 : "Remplis ces quelques informations complémentaires",
//          text_email : "Email",
//          text_password : "Mot de passe",
//          text_firstname : "Prénom",
//          text_lastname : "Nom",
//          text_function : "Fonction",
//          text_entreprise : "Entreprise",
//          text_signup : "Sign Up"
//     }


class Signup extends React.Component {

    state = {
        text_static: [],
        text_static2: [],
        text_static3: [],
        text_static4: [],
        text_static5: [],
        text_static6: [],
        text_static7: [],
        text_static8: [],
        text_static9: [],
        errors: false,
        password: '',
        email: '',
        firstname: '',
        lastname: '',
        fonction: '',
        entreprise: ''
    }

    
    getText1 = async () => {
        const res = await axios.get("http://localhost:3001/text_static/144")
        this.setState({ text_static: res.data[0] });
    };
    
    getPlaceholderMail = async () => {
        const res = await axios.get("http://localhost:3001/text_static/134")
        this.setState({ text_static2: res.data[0] });
    };

    getPlaceholderMdp = async () => {
        const res = await axios.get("http://localhost:3001/text_static/135")
        this.setState({ text_static3: res.data[0] });
    };

    getText2 = async () => {
        const res = await axios.get("http://localhost:3001/text_static/145")
        this.setState({ text_static4: res.data[0] });
    };

    getFirstName = async () => {
        const res = await axios.get("http://localhost:3001/text_static/136")
        this.setState({ text_static5: res.data[0] });
    };

    getLastName = async () => {
        const res = await axios.get("http://localhost:3001/text_static/137")
        this.setState({ text_static6: res.data[0] });
    };

    getFunction = async () => {
        const res = await axios.get("http://localhost:3001/text_static/138")
        this.setState({ text_static7: res.data[0] });
    };

    getEntreprise = async () => {
        const res = await axios.get("http://localhost:3001/text_static/139")
        this.setState({ text_static8: res.data[0] });
    };

    getSignup = async () => {
        const res = await axios.get("http://localhost:3001/text_static/112")
        this.setState({ text_static9: res.data[0] });
    };


    componentDidMount() {
        this.getText1();
        this.getPlaceholderMail();
        this.getPlaceholderMdp();
        this.getText2();
        this.getFirstName();
        this.getLastName();
        this.getFunction();
        this.getEntreprise();
        this.getSignup()
    }

    // Mecanisme recuparation des entrées des forms
    setelementform = (field) => event => {
        this.setState({ [field]: event.target.value });
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

    // Pas d'utilisateur avec le meme email.
    checkforemail = (evt) => {
        // on recupere la string tapée
        var email = evt.target.value;
        this.setState({ email: email });
        // TODO refactorer l'expression reguliere suivante : elle renvoie en console des notices d'erreur d'echapement de carateres
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var self = this;
        // On test la string en attente d'un email
        if ( re.test(email) ) {
            // Si on a un email, on interroge la db pour savoir
            // Si cet email exist
            axios.post('http://localhost:3001/login/check-email', {
                email: email,
            })
            .then(function (res) {
                // si l'array en retour n'est pas vide
                // L'email est deja utilisé
                if (res.data && res.data.length !== 0) {
                    self.setMessageError("Desolé, mais cet email n\'est pas disponible.");
                    self.setState({ email: '' });
                }
            })
            .catch(function (error) {
                console.log('Désolé, erreur systeme.');
            });
        }

    }

    // Operation lors du submit
    handleRegisterSubmit = (e) => {
        e.preventDefault();

        // On store les champs dans des variables
        const password = e.target.password.value;
        const email = e.target.email.value;
        const lastname = e.target.lastname.value;
        const firstName = e.target.firstname.value;
        const fonction = e.target.fonction.value;
        // const entreprise = e.target.entreprise.value;

        var self = this;

        // On ne veut pas de champs vide
        if (password === '' || email === '' || lastname === '' || firstName === '' || fonction === '' ) {
            this.setMessageError("Desolé, mais vous devez renseigner tous les champs.");
            return
        }
        else{
        // On encrypt le pass
        const password_bcrypt = bcrypt.hashSync(password);

        // Si tous les champs sont renseignés on enregistre l'utilisateur.
        axios.post('http://localhost:3001/login/register', {
            firstName: firstName,
            lastName: lastname,
            email: email,
            password: password_bcrypt,
            fonction: fonction,
            // entreprise: entreprise
        })
        .then(function (response) {
            self.setMessageError("Utilisateur enregistré.");
            self.setState({ email: '', password: '', firstname: '', lastname: '', fonction: '', entreprise: '' });
        })
        .catch(function (error) {
            console.log('Désolé, erreur systeme.');
        });  
        
        this.props.history.push({
            pathname :"/start"
        })
        
        }
        
    }


    render() {

        const {text_static,text_static2,text_static3,text_static4,text_static5,text_static6,text_static7,text_static8,text_static9} = this.state

        return (
        
        <div id="grid_login">
        {/* <BackgroundLogin/> */}

        <section className="blue_bg">
                
                <form method="post" action="#" onSubmit={this.handleRegisterSubmit} >
                    <div id="form">
                        {/* Gestion des messages d'erreurs */}
                        { this.state.errors !== false &&
                            <div className="message-login">
                                <h3>{ this.state.errors } </h3>
                            </div>
                        }
                        <p className="white_text">{text_static.all_text}</p>
                        {/* Form email */}
                        <div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder={text_static2.all_text}
                                onChange={this.checkforemail}
                                value={this.state.email} 
                            />
                        </div>
                        {/* Form password */}
                        <div>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" placeholder={text_static3.all_text}
                                onChange={this.setelementform('password')}
                                value={this.state.password}
                            />
                        </div>

                        <p className="white_text">{text_static4.all_text}</p>
                        {/* Form firstname */}
                        <div>
                            <input 
                                type="text" 
                                name="firstname" 
                                placeholder={text_static5.all_text}
                                onChange={this.setelementform('firstname')}
                                value={this.state.firstname}
                            />
                        </div>
                        {/* Form lastname */}
                        <div>
                            <input 
                                type="text" 
                                name="lastname" 
                                placeholder={text_static6.all_text}
                                onChange={this.setelementform('lastname')}
                                value={this.state.lastname} 
                            />
                        </div>
                        {/* Form fonction */}
                        {/* TODO : alterrer la table pour valider les modifications du label
                            function - terme reserver au systeme, vers fonction
                            Attention si utilisé ailleur
                            query a réaliser en db :
                            ALTER TABLE `mycoachperso`.`manager` 
                            CHANGE COLUMN `function` `fonction` VARCHAR(45) NOT NULL;
                        */}
                        <div>
                            <input 
                                type="text" 
                                name="fonction" 
                                placeholder={text_static7.all_text}
                                onChange={this.setelementform('fonction')}
                                value={this.state.fonction} 
                            />
                        </div>
                        {/* Form entreprise */}
                        {/*
                            TODO : alterer la table manager pour activer la validation du champ entreprise
                            query a utiliser en db :
                            ALTER TABLE `mycoachperso`.`manager` 
                            ADD COLUMN `entreprise` VARCHAR(45) NULL AFTER `fonction`;
                            
                        */}
                        <div>
                            <input 
                                type="text" 
                                name="entreprise" 
                                placeholder={text_static8.all_text}
                                onChange={this.setelementform('entreprise')}
                                value={this.state.entreprise} 
                            />
                        </div>
                        {/* Form submit */}
                        <div>
                            <button 
                                className="button_signup_submit" 
                                type="submit" 
                                name="signup" >
                                    {text_static9.all_text}
                            </button>
                        </div>

                        <div className="height30"></div>
                        
                        {/* J'ai déjà un compte page bouton */}
                        <NavLink to="/">
                            <a className="white_text">J'ai déjà un compte</a>
                        </NavLink>

                        {/* <NavLink to="/">
                            <button  className="button_signup" type="button" name="texte">Connexion</button>
                        </NavLink>
                        <div className="height30"></div> */}
                    </div>
                </form>
                
            </section>
            {/* <footer className="blue_bg"></footer>   */}

        </div>
        );
    }
  }

export default withRouter(Signup);