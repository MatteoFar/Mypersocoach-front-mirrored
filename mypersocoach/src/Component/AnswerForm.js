import React from 'react';
import BackgroundAnswer from './BackgroundAnswer';
// import '../Component/GeneralCss.css';
import '../Component/AnswerForm.css';

const Answer = () => {
    return (

        <div id="grid_answer">
            <BackgroundAnswer/>

            <section>
                {/* <img src="" alt="#">Icône de l'entête</img> */}
                <div className="title_pbm">
                    <p>Icône</p>
                    <h1 class="h1">Titre 1 du problème identifié</h1>
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