import React from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import SignScreen from "./Screen/SignScreen";
import LoginScreen from "./Screen/LoginScreen";
import AnswerScreen from "./Screen/AnswerScreen";
import Symptome2 from "./Screen/Symptome2";

import Start from "./Screen/Start";
import Symptome5 from "./Screen/Symptome5";
import Symptome3 from "./Screen/Symptome3";
import Source2 from "./Pages/Source2";
import Source2environment from "./Screen/Source2environment";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/sign_up" component={SignScreen} />
            <Route exact path="/answer_screen" component={AnswerScreen} />
            <Route exact path="/symptome3" component={Symptome3} />
            <Route exact path="/Source2" component={Source2} />
            <Route exact path="/Source2environment" component={Source2environment} />
            <Route exact path="/Symptome5" component={Symptome5} />
            <Route exact path="/symptome2" component={Symptome2} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
