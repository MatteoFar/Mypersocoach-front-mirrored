import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Source2environment.css";



import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import ForwardStep from "../Component/ForwardStep";
import FormAction from "../Component/FormAction";

class Solution2 extends React.Component {
  state = {
    // action1: "",
    // action2: "",
    // action3: "",
    // action4: "",
    // action5: "",
    // addActions: [],
    icon: [],
    text_static: [],
    text_static2: [],
    icon_add_action:[],
    icon_remove:[]
  };

  getHeader = async () => {
    const res = await axios.get("http://localhost:3001/icon/5");
    this.setState({ icon: res.data[0] });
  };

  getTextStatic = async () => {
    const res = await axios.get("http://localhost:3001/text_static/141");
    this.setState({ text_static: res.data[0] });
  };
  getTextStatic2 = async () => {
    const res = await axios.get("http://localhost:3001/text_static/128");
    this.setState({ text_static2: res.data[0] });
  };
  getButtonAddAction= async () => {
    const res = await axios.get("http://localhost:3001/icon/5");
    this.setState({ icon_add_action: res.data[0] });
  };
  getButtonRemoveAction= async () => {
    const res = await axios.get("http://localhost:3001/icon/5");
    this.setState({ icon_remove: res.data[0] });
  };

  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    this.getTextStatic2();
    this.getButtonAddAction();
    this.getButtonRemoveAction();
  }

  render() {
    const { icon, text_static, text_static2,icon_add_action,icon_remove } = this.state;

    console.log("test action", this.state);

    return (
      <div className="containerSource2Environment">
          
        <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
        <div className="text_size">
        <HeadingText text_static={text_static.all_text} />
        </div>
        <FormAction addActions={this.props.addActions}action1={this.props.action1}action2={this.props.action2}action3={this.props.action3}action4={this.props.action4}action5={this.props.action5}/>
        <ForwardStep text_static2={text_static2.all_text} /> 
       
        
        {/* <button onClick={e => this.addAction(e)}>Add Action</button>
        <button onClick={index => this.handleRemove(index)}>
          Remove Action
        </button> */}
      </div>
    );
  }
}

export default withRouter(Solution2);
