import React from "react"

const Heading = ({ headers }) => {
   return (
    <div>

      <div className="headerText" className="header_mainProb">
        {headers.map(header => {
          return(
              <div>
                <img src={header.picture_src} />
                <p >{header.all_text}</p>
              </div>
            )
          })
        }


      </div>

    {/* <div className="heading_text">
      {headingTexts.map(headingText => (
        <p> {headingText.text} </p>
      ))}

    </div>

    <div>
      {headingTitle.map(headingTitles => (
        <h4> {headingTitles.text} </h4>
      ))}

    </div> */}

  </div>

   )
}

export default Heading
