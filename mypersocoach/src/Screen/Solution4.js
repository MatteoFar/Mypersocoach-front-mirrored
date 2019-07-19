import React from 'react';
import axios from "axios";

import './GeneralContainer.css';

import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText';
import FormTime from '../Component/FormTime';



class Solution4 extends React.Component {

    state = {
        icon: [],
        text_static: [],
        
      
    };

    
    getHeader = async() => {
        const res = await axios.get("http://localhost:3001/icon/5")
        this.setState({icon: res.data[0]});
    };

    getTextStatic = async() => {
        const res = await axios.get("http://localhost:3001/text_static/36")
        this.setState({text_static: res.data[0]});
    };

  



    componentDidMount() {
        this.getHeader();
        this.getTextStatic();
       
     
    }

    render() {
       
        const{icon,text_static}= this.state
        return (
            <div className="general_container">
                <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
                <HeadingText text_static={text_static.all_text} />
                <FormTime summaryId={this.props.location.state.summaryId}/>
              

            </div>
        );
    }
}

export default Solution4;