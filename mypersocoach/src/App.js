import React from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import SignScreen from './Screen/SignScreen';
import LoginScreen from './Screen/LoginScreen';
import AnswerScreen from './Screen/AnswerScreen';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/sign_up" component={SignScreen} />
        <Route exact path="/answer_screen" component={AnswerScreen} /> 
      </Switch>
  </BrowserRouter>
  );
}

export default App;
