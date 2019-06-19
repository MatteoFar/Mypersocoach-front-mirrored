import React from "react";

const textEnvironments = [
  {
    text: `Il faut s'interroger : qu'est ce qui dans ton environnement pourrait être la cause de ton problème`
  },
  {
    text: `Où est-ce que tu travailles le mieux ?`
  },
  {
    text: `De quel type de personne aimes-tu t'entourer ?`
  },
  {
    text: `Quel type de personne prend toute ton énergie ?`
  },
  {
    text: `Quelles heures de la journée sont les plus productives pour toi ?`
  },
  {
    text: `Semble-t-il y avoir un élément dans ton environnement de travail qui serait la cause de ton problème ?`
  }
];
const headingTexts2 = [
  {
    text: `Voici des thématiques récurrentes,y en a-t-il une qui correspondond à la situation ?`
  }
];
class HeadingText extends React.Component {
  render() {
    return (
      <>
        {textEnvironments.map(textEnvironment => (
          <p className="noMarginText"> {textEnvironment.text} </p>
        ))}
        {headingTexts2.map(headingText2 => (
          <p className="textSymptom3Header"> {headingText2.text} </p>
        ))}
      </>
    );
  }
}
export default HeadingText;
