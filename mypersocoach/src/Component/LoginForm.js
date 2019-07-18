import React from 'react';
import axios from "axios";
import {NavLink } from "react-router-dom";

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
        text_static6: []
    }

    getPlaceholderMail = async () => {
        const res = await axios.get("http://localhost:3001/text_static/134")
        this.setState({ text_static2: res.data[0] });
    };

    getPlaceholderMdp = async () => {
        const res = await axios.get("http://localhost:3001/text_static/135")
        this.setState({ text_static3: res.data[0] });
    };

    getValide = async () => {
        const res = await axios.get("http://localhost:3001/text_static/133")
        this.setState({ text_static4: res.data[0] });
    };

    getText = async () => {
        const res = await axios.get("http://localhost:3001/text_static/143")
        this.setState({ text_static5: res.data[0] });
    };

    getSignup = async () => {
        const res = await axios.get("http://localhost:3001/text_static/112")
        this.setState({ text_static6: res.data[0] });
    };

    componentDidMount() {
        this.getPlaceholderMail();
        this.getPlaceholderMdp();
        this.getValide();
        this.getText();
        this.getSignup()
    }

    render() {

        const {text_static2,text_static3,text_static4,text_static5,text_static6} = this.state

        return (
            <div id="grid_login">
            {/* <BackgroundLogin/> */}
            
                <section>

                    <form method="post" action="#"> 
                        <div id="form">
                            <div>
                                <input type="email" name="email" placeholder={text_static2.all_text} />
                            </div>

                            <div>
                                <input type="password" id="password" name="password" placeholder={text_static3.all_text} />
                            </div>
                            
                            <div>
                                <button className="button_forward " type="button" name="login">{text_static4.all_text}</button>
                            </div>
                            
                            <p className="white_text">{text_static5.all_text}</p>
                            
                            <NavLink to="/sign_up">
                                <button className="button_signup" type="button" name="texte">{text_static6.all_text}</button>
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