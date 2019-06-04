import React, {Component} from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css'

import Start from './Screen/Start'
import Heading from './Component/Heading'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
          <Switch>
                <Route exact path="/start" component={Start} />  
                <Route exact path="/login" component={Login_screen} />
                <Route exact path="/sign_up" component={Sign_screen} /> 
          </Switch>
        </BrowserRouter>
      </div>
  )}
}


