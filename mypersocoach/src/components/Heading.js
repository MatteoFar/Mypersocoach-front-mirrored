import React from "react"
import Problem from "./Problem"

const headingIcons = [
  {
    image : require('../components/icon_heading.png')
  }
]
const headingTexts = [
  {
    text: `C'est ici que démarre l'aventure.`
  },
  {
    text:"Tu vas accompagner ton interlocuteur à la manière d'un coach professionnel."
  },
  {
    text: "Je vais te guider tout au long des différentes étapes."
  },
  {
    text: "Quel est l'objet des entretiens ?"
  }
]
const Heading = () => {
   return (
  <div className="icons">
    <div>
      {headingIcons.map(headingIcon => (
        
          <img className="image_icon" alt="icon" src={headingIcon.image} />
        
      ))}
    </div>
    <div>
      {headingTexts.map(headingText => (
        <p> {headingText.text} </p>
      ))}
      <Problem/>
    </div>
  </div>

   )
}

export default Heading
