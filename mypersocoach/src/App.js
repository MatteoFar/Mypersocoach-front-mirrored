import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login_screen from './Screen/Login_screen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login_screen} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
