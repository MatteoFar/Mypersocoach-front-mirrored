import React, {Component} from 'react';
import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText'
import DisplayModal from '../Component/DisplayModal'
import axios from 'axios'
import '../Component/Problem.css'



class Start extends Component {
  
  state = {
    icon : [],
    headingText1 : []
    
  }

  getHeadingText1 = async () => {
    const res= await axios.get('http://localhost:3001/text_static/1')
    this.setState({  headingText1 : res.data[0]  })
          
     
  }

  
  getHeader = async () => {
    const res= await axios.get('http://localhost:3001/icon/27')
    this.setState({  icon: res.data[0]  })
          
     
  }


  componentDidMount(){
    this.getHeadingText1()
    this.getHeader()
  }
  
  
  
  
  
  render() {
    return (
      <div className="startContainer">
        <IconMain icon={this.state.icon.picture_src} />
        <HeadingText text_static= {this.state.headingText1.all_text} />
        <DisplayModal />
        
      </div>
  )}
}


export default Start;
