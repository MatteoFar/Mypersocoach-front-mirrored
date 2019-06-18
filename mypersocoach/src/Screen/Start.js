import React, {Component} from 'react';
import IconMain from '../Component/IconMain';

import DisplayModal from '../Component/DisplayModal'
import '../Component/Problem.css'

class Start extends Component {
  render() {
    return (
      <div className="start">
        <IconMain/>
        
        <DisplayModal />
        
      </div>
  )}
}


export default Start;
