import React, {Component} from 'react';
import GetHeading from '../Component/GetHeading';
import Problem from '../Component/Problem'

import '../Component/Problem.css'

class Start extends Component {
  render() {
    return (
      <div className="start">
        <GetHeading/>
        <Problem />
      </div>
  )}
}


export default Start;
