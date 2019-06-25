import React, {Component} from 'react';
import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText'
import DisplayModal from '../Component/DisplayModal'

import '../Component/Problem.css'




class Start extends Component {
  render() {
    return (
      <div className="startContainer">
        <IconMain/>
        <HeadingText />
        <DisplayModal />
        
      </div>
  )}
}


export default Start;
