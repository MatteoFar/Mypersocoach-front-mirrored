import React, {Component} from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css'

import Start from './Screen/Start'
import Heading from './components/Heading'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
          <Switch>
                <Route exact path="/start" component={Start} />   
          </Switch>
        </BrowserRouter>
      </div>
  )}
}


export default App;
