import React, {Component} from 'react';
import Problem from '../Component/Problem';
import Heading from '../Component/Heading';
import '../Component/Problem.css'

class Start extends Component {
  render() {
    return (
      <div className="start">
        <Heading/>
        <Problem />
      </div>
  )}
}


export default Start;
