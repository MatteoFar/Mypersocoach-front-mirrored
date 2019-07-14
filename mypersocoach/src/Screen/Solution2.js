import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Source2environment.css";



import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import FormAction from "../Component/FormAction";

class Solution2 extends React.Component {
  state = {
    icon: [],
    text_static: [],
    text_static2: [],
    // icon_add_action:[],
    // icon_remove:[]
  };

  getHeader = async () => {
    const res = await axios.get("http://localhost:3001/icon/5");
    this.setState({ icon: res.data[0] });
  };

  getTextStatic = async () => {
    const res = await axios.get("http://localhost:3001/text_static/141");
    this.setState({ text_static: res.data[0] });
  };
  
  // getButtonAddAction= async () => {
  //   const res = await axios.get("http://localhost:3001/icon/5");
  //   this.setState({ icon_add_action: res.data[0] });
  // };
  // getButtonRemoveAction= async () => {
  //   const res = await axios.get("http://localhost:3001/icon/5");
  //   this.setState({ icon_remove: res.data[0] });
  // };

  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    // this.getButtonAddAction();
    // this.getButtonRemoveAction();
  }

  render() {
    const { icon, text_static, text_static2 } = this.state;

    

    return (
      <div className="containerSource2Environment">
          
        <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
        <div className="text_size">
        <HeadingText text_static={text_static.all_text} />
        </div>
        <FormAction summaryId={this.props.location.state.summaryId} redirectionPage={'solution3'} text_static2={text_static2.all_text}/>       
        
      </div>
    );
  }
}

export default withRouter(Solution2);
