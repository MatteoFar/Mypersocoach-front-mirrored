import React from "react"

const headingIcons = [
  {
    image : require('../Component/icon_heading.png')
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
]
const headingTitle = [
  {
    text: "Quel est l'objet des entretiens ?"
  }
]
const Heading = () => {
   return (
  <div className="header_mainProb">
    <div>
      {headingIcons.map(headingIcon => (
        
          <img className="icon_symp" alt="icon" src={headingIcon.image} />
        
      ))}
    </div>
    <div className="heading_text">
      {headingTexts.map(headingText => (
        <p> {headingText.text} </p>
      ))}

    </div>

    <div>
      {headingTitle.map(headingTitles => (
        <h4> {headingTitles.text} </h4>
      ))}

    </div>
  </div>

   )
}

export default Heading
