import React from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import SignScreen from "./Screen/SignScreen";
import LoginScreen from "./Screen/LoginScreen";
import Sympto4Conflict from "./Screen/Sympto4Conflict";
import Symptome2 from "./Screen/Symptome2";

import Start from "./Screen/Start";
import Symptome5 from "./Screen/Symptome5";
import Symptome3 from "./Screen/Symptome3";
import Source2 from "./Pages/Source2";
import Source2environment from "./Screen/Source2environment";
import Sympto4Perf from "./Screen/Sympto4Perf";
import Sympto4Com from "./Screen/Sympto4Com";
import Sympto4Orga from "./Screen/Sympto4Orga";
import Sympto4Time from "./Screen/Sympto4Time";
import Sympto4Stress from "./Screen/Sympto4Stress";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/sign_up" component={SignScreen} />
            <Route exact path="/symptome4_conflict" component={Sympto4Conflict} />
            <Route exact path="/symptome4_perf" component={Sympto4Perf} />
            <Route exact path="/symptome4_orga" component={Sympto4Orga} />
            <Route exact path="/symptome4_com" component={Sympto4Com} />
            <Route exact path="/symptome4_time" component={Sympto4Time} />
            <Route exact path="/symptome4_stress" component={Sympto4Stress} />
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
