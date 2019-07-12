import React from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import SignScreen from "./Screen/SignScreen";
import LoginScreen from "./Screen/LoginScreen";
import Sympto4Conflict from "./Screen/Sympto4Conflict";
import Symptome2 from "./Screen/Symptome2";
import Start from "./Screen/Start";
import Symptome5 from "./Screen/Symptome5";
import Symptome3 from "./Screen/Symptome3";
import Source2 from "./Screen/Source2";
import Source2environment from "./Screen/Source2environment";
import Source3Environment from "./Screen/Source3_environment";
import Source3Behavior from "./Screen/Source3_behavior";
import Source3Capacity from "./Screen/Source3_capacity"
import Source3Beliefs from "./Screen/Source3_beliefs"
import Sympto4Perf from "./Screen/Sympto4Perf";
import Sympto4Com from "./Screen/Sympto4Com";
import Sympto4Orga from "./Screen/Sympto4Orga";
import Sympto4Time from "./Screen/Sympto4Time";
import Sympto4Stress from "./Screen/Sympto4Stress";
import Reformulation from "./Screen/Reformulation";
import Source2comportement from "./Screen/Source2comportement";
import Source2croyances from "./Screen/Source2croyances";
import Source2capacites from"./Screen/Source2capacites"
import Solution1 from "./Screen/Solution1"
import Solution2 from "./Screen/Solution2";
import Solution3 from "./Screen/Solution3";





class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/sign_up" component={SignScreen} />
            <Route exact path="/symptome4_conflict" component={Sympto4Conflict }/>
            <Route exact path="/symptome4_perf" component={Sympto4Perf} />
            <Route exact path="/symptome4_orga" component={Sympto4Orga} />
            <Route exact path="/symptome4_com" component={Sympto4Com} />
            <Route exact path="/symptome4_time" component={Sympto4Time} />
            <Route exact path="/symptome4_stress" component={Sympto4Stress} />
            <Route exact path="/symptome3" component={Symptome3} />
            <Route exact path="/Source2" component={Source2} />
            <Route exact path="/Source2environment" component={Source2environment} />
            <Route exact path="/source2comportement" component={Source2comportement} />
            <Route exact path="/source2croyances" component={Source2croyances} />
            <Route exact path="/source2capacites" component={Source2capacites} />
            <Route exact path="/Symptome5" component={Symptome5} />
            <Route exact path="/symptome2" component={Symptome2} />
            <Route exact path="/source3_environment" component={Source3Environment} />
            <Route exact path="/source3_comportement" component={Source3Behavior}/>
            <Route exact path="/source3_capacites" component={Source3Capacity}/>
            <Route exact path="/source3_croyances" component={Source3Beliefs}/>
            <Route exact path="/symptome2" component={Symptome2} />
            <Route exact path="/reformulation" component={Reformulation} />
            <Route exact path="/solution-1" component={Solution1} />
            <Route exact path="/solution-2" component={Solution2} />
            <Route exact path="/solution-3" component={Solution3} />
            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
