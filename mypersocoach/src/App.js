import React, {Component} from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css'

import Start from './Screen/Start'


//import Heading from './Component/Heading'
//import Heading from './components/Heading'
//import Symptome3 from "./Pages/Symptome3";
//import Source2 from "./Pages/Source2"
import Source2Environment from "./Pages/Source2Environment"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
                <Route exact path="/start" component={Start} />  
                {/*<Route exact path="/login" component={Login_screen} />
                <Route exact path="/sign_up" component={Sign_screen} /> */}
                {/*<Route exact path="/" component={Symptome3} /> */}
                {/* <Route exact path="/" component={Source2} /> */}
                <Route exact path="/" component={Source2Environment}/>

          </Switch>
        </BrowserRouter>
      </div>
  )}
}

export default App
