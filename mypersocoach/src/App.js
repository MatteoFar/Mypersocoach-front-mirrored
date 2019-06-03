import React, {Component} from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css'

import Heading from './components/Heading'
import Problem from './components/Problem'
import ProblemModal from './components/ProblemModal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
          <Switch>
                <Route exact path="/" component={Heading} />
                
          </Switch>
        </BrowserRouter>
      </div>
  )}
}


export default App;
