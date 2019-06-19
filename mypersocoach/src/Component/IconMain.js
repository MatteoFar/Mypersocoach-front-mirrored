import React from "react";

const headingEnvironments = [
  {
    image: require("../Pages/logo_heading2.png")
  }
];
class IconMain extends React.Component {
  render() {
    return (
      <div className="logoTextEnvironment">
        {headingEnvironments.map(headingEnvironment => (
          <img
            className="imageIconEnvironment"
            alt="icon"
            src={headingEnvironment.image}
          />
        ))}
      </div>
    );
  }
}
export default IconMain;
