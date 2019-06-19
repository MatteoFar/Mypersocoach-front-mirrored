import React from "react";

const iconTextEnvironments = [
  {
    image: require("../Pages/logo_environment.png"),
    text: "Mon environnement"
  }
];
class TitlePage extends React.Component {
  render() {
    return (
      <div className="iconTextEnvironment">
        {iconTextEnvironments.map(iconTextEnvironment => (
          <>
            <img
              href="#"
              className="iconEnvironment"
              alt="icon"
              src={iconTextEnvironment.image}
            />
            <p className="textEnvironment">{iconTextEnvironment.text}</p>
          </>
        ))}
      </div>
    );
  }
}
export default TitlePage;
