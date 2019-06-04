import React from "react";

import icon_problem from '../Component/icon_problem.png'
import icon_goal from '../Component/icon_goal.png'



const ProblemModal = () => (
  <div>
  <div className="Issue">
    < img className="image_icon" alt="icon" src={icon_problem} />
    <p>Apaiser une situation conflictuelle<br></br>
       Résoudre un probleme<br></br>
       Faire évoluer une situation
    </p>
  </div>

   <div className="objective">
    < img className="image_icon" alt="icon" src={icon_goal} />
    <p>Atteindre un objectif individuel<br></br>
       Améliorer une performence<br></br>
       Réussir quelque chose qui semble compliqué
    </p>
  </div>
  </div>
);

export default ProblemModal;
