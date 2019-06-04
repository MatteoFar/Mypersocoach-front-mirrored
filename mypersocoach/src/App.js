import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

//import Heading from './components/Heading'
import Symptome3 from "./Pages/Symptome3";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={Heading} /> */}
            <Route path="/" component={Symptome3} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
