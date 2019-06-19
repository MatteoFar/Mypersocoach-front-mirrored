import React from 'react';

const headingAnswers = [
    {
        icon : require("../Pages/icon_heading.png"),
        text : "Exprime le besoin auquel tu fais face ou la situation à faire évoluer"
    },

]

class BackgroundAnswer extends React.Component {
    render() {
        
        return (
            <header className="header_answer">
                {headingAnswers.map(headingAnswer => (
                    <div>
                        <img className="image_icon_large" alt="icon" src={headingAnswer.icon} />
                        <p>{headingAnswer.text} </p>
                    </div>
                    )
                )}
                
            </header>
        );
    }
}

export default BackgroundAnswer;