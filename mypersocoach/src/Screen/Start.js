import React, {Component} from 'react'
import Problem from '../components/Problem'
import ProblemModal from '../components/ProblemModal'
import Heading from '../components/Heading';

class Start extends Component {
  render() {
    return (
      <div className="start">
        <Heading/>
        <Problem />
        <ProblemModal/>
      </div>
  )}
}


export default Start;
