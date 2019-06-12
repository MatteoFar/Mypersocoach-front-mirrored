import React from 'react';
import BackgroundAnswer from './BackgroundAnswer';
import '../Component/GeneralCss.css';
import '../Component/AnswerForm.css';

const titleAnswers = [
    {
        icon : require("../Pages/logo_perf.png"),
        text : "Titre 1 du problème identifié"
    },
]

const Answer = () => {
    return (

        <div id="grid_answer">
            <BackgroundAnswer/>

            <section>

                {/* Title */}
                <div>
                    {titleAnswers.map(titleAnswer => (
                        <div className="title_pbm">
                            <img className="image_icon_small" alt="icon" src={titleAnswer.icon} />
                            <h1 className="h1">{titleAnswer.text}</h1>
                        </div>
                        )
                    )}
                </div>
                

                <form method="post" action="#">
                    <div id="form">

                        <p>
                            <textarea name="textarea" maxlength="300" placeholder="Vous pouvez écrire ici"></textarea>
                            {/* rows="5" cols="30" */}
                        </p>
                        
                        <p>
                            <input className="btn_forward" type="submit" name="login" value="Valider" />
                        </p>
                        
                        <p>
                            <input className="btn_back" type="button" name="texte" value="Retour" />
                        </p>

                    </div>
                </form>
            </section>
            
            <footer></footer>

        </div>
    );
}

export default Answer;