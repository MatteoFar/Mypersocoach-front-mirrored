import React from "react";

const headingEnvironments = [
  {
    image: require("../Pages/logo_heading2.png")
  },
];
const headingIcons2 = [
  {
    image: require("../Pages/icon_heading.png")
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
          {headingIcons2.map(headingIcon2 => (
            <img
              className="imageIconSymptom3"
              alt="icon"
              src={headingIcon2.image}
            />
            ))}
        
      </div>
    );
  }
}
export default IconMain;
