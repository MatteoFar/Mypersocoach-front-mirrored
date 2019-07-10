import React from 'react';
import './LoginForm.css';

// const titlesH1 = [
//   {
//     text : "Mypersocoach"
//   },
// ]

// class BackgroundLogin extends React.Component {
//   render() {
//     return (
//           <div className="header_login">
//             {titlesH1.map(titleH1 => (
//               <div>
//                 <h1 className="h1_login">{titleH1.text}</h1>
//               </div>
//               )
//             )}
//           </div>
//     );
//   }
// }

const BackgroundLogin = ({text_static}) => {

  return (
    <div className="header_login">
      <h1 className="h1_login">{text_static}</h1>
    </div>
  )
}

export default BackgroundLogin;