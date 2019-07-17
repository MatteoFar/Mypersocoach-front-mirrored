import React from 'react'
import axios from "axios";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import BackAction from '../Component/BackAction';
import RecapSolution from '../Component/RecapSolution';

class Solution3 extends React.Component {

    state = {

        icon: [],
        text_static: [],
        text_static2: [],
        // response : '',
        // isReply: false,
        summaryId: ''
    }




    getHeader = async () => {
        const res = await axios.get("http://localhost:3001/icon/5");
        this.setState({ icon: res.data[0] });
        // .then(data => {
        //   this.setState({ icon: data[0] });
        // });
      };
      
    getTextStatic = async () => {
        const res = await axios.get("http://localhost:3001/text_static/35");
        this.setState({ text_static: res.data[0] });
        // .then(data => {
        // this.setState({ text_static: data[0] });
        // });
        // console.log(res)
      };

      getButtonReturn = async () => {
        const res = await axios.get("http://localhost:3001/text_static/117");
        this.setState({ text_static2: res.data[0] });
        // .then(data => {
        // this.setState({ text_static: data[0] });
        // });
        // console.log(res)
      };

      componentDidMount() {
          this.getHeader();
          this.getTextStatic();
          this.getButtonReturn()
          
      }


    render(){
        
       
        const addActions = this.props.location.state.addActions
        const {icon , text_static ,text_static2 } = this.state
        
return (

            <div className="solution3_width_height">
            <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
            <HeadingText text_static={text_static.all_text} />
            <RecapSolution  summaryId={this.props.location.state.summaryId} addActions ={addActions}/> 
          
            <BackAction summaryId={this.props.location.state.summaryId} text_static2={text_static2.all_text} addActions={addActions}/>
            </div>
            
        )
        
        
    }
}


export default Solution3;