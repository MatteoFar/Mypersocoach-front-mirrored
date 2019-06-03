import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Sign_screen from './Screen/Sign_screen'
import Login_screen from './Screen/Login_screen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login_screen} />
        <Route exact path="/sign_up" component={Sign_screen} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
