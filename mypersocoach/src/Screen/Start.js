import React, {Component} from 'react'
import Problem from '../Component/Problem'
import ProblemModal from '../Component/ProblemModal'
import Heading from '../Component/Heading';

class Start extends Component {
  render() {
    return (
      <div className="start">
        <Heading/>
        <Problem />
        {/* <ProblemModal/> */}
      </div>
  )}
}


export default Start;
