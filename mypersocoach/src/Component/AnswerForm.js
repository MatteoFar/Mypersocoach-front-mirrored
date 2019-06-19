import React from 'react';
import BackgroundAnswer from './BackgroundAnswer';
import '../Component/GeneralCss.css';
import '../Component/AnswerForm.css';

const titleAnswers = [
    {
        icon : require("../Pages/logo_perf.png"),
        titre : "Titre 1 du problème identifié"
    },
]

const textAnswers = {
    text : "Vous pouvez écrire ici",
    text_valid : "Valider",
    text_return : "Retour"
}

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
                            <h1 className="h1">{titleAnswer.titre}</h1>
                        </div>
                        )
                    )}
                </div>
                

                <form method="post" action="#">
                    <div id="form">

                        <div>
                            <textarea name="textarea" maxlength="300" placeholder={textAnswers.text}></textarea>
                            {/* rows="5" cols="30" */}
                        </div>
                        
                        <div>
                            <input className="btn_forward" type="submit" name="login" value={textAnswers.text_valid} />
                        </div>
                        
                        <div>
                            <input className="btn_back" type="button" name="texte" value={textAnswers.text_return} />
                        </div>

                    </div>
                </form>
            </section>
            
            <footer></footer>

        </div>
    );
}

export default Answer;