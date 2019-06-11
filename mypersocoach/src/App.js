import React from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import SignScreen from './Screen/SignScreen';
import LoginScreen from './Screen/LoginScreen';
import AnswerScreen from './Screen/AnswerScreen';

import Start from './Screen/Start'
//import Heading from './Component/Heading'

//import Heading from './components/Heading'
import Symptome3 from "./Pages/Symptome3";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
                <Route exact path="/" component={Login_screen} />
                <Route exact path="/start" component={Start} />  
                <Route exact path="/sign_up" component={Sign_screen} /> 
                <Route exact path="/answer_screen" component={AnswerScreen} />
                <Route exact path="/symptome3" component={Symptome3} />
                <Route exact path="/Source2" component={Source2} />
                <Route exact path="/Source2environnement" component={Source2environnement}/>
          </Switch>
        </BrowserRouter>
      </div>
  )}
}

export default App;
