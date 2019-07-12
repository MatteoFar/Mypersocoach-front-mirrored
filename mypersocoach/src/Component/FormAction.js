import React from "react";
import { withRouter } from "react-router-dom";
import axios from"axios"
import "./FormAction.css"


class FormAction extends React.Component{
    state = {
        action1: "",
        action2: "",
        action3: "",
        action4: "",
        action5: "",
        addActions: [],
        icon_add_action:[],
        icon_remove:[],
        text_static2:[]
    }
    getButtonAddAction= async () => {
      const res = await axios.get("http://localhost:3001/icon/33");
      this.setState({ icon_add_action: res.data[0] });
    };
    getButtonRemoveAction= async () => {
      const res = await axios.get("http://localhost:3001/icon/20");
      this.setState({ icon_remove: res.data[0] });
    };
    getPlaceholderAction = async () => {
      const res = await axios.get("http://localhost:3001/text_static/141")
      this.setState({ text_static2: res.data[0] });
  };

    handleChangeAction = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      addAction = () => {
        this.setState({ addActions: [...this.state.addActions, ""] });
      };
    
      handleRemove = index => {
        this.state.addActions.splice(index, 1);
        this.setState({ addAction: this.state.addActions });
      };
      // need to fix by putin a "setState"
    
      handleChange = (e, index) => {
        this.state.addActions[index] = e.target.value;
        this.setState({ addActions: this.state.addActions });
        console.log("test de add actino", this.state.addActions);
      };
    
      handleSubmit = e => {
        e.preventDefault();
    
        this.props.history.push({
          pathname: "/solution3",
          state: {
            action1: this.state.action1,
            action2: this.state.action2,
            action3: this.state.action3,
            action4: this.state.action4,
            action5: this.state.action5,
            addActions: this.state.addActions
          }
        });
      };
      componentDidMount() {
        this.getButtonAddAction()
        this.getButtonRemoveAction()
        this.getPlaceholderAction()
        
      }
render(){
  const{icon_add_action,icon_remove,text_static2}=this.state
return(
    <div className="formCenter">
<form 
          // className="formAction"
          onSubmit={this.handleSubmit}
          id="dynamicInput"
        >
          <p className="numbForm">1-
          <input className="inputAction"
            placeholder={text_static2.all_text}
            type="text"
            name="action1"
            value={this.state.action1}
            onChange={this.handleChangeAction}
          /></p>
          <p className="numbForm">2-
          <input className="inputAction"
            placeholder={text_static2.all_text}
            type="text"
            name="action2"
            value={this.state.action2}
            onChange={this.handleChangeAction}
          /></p>
          
         <p className="numbForm">3-
            <input className="inputAction"
            placeholder={text_static2.all_text}
            type="text"
            name="action3"
            value={this.state.action3}
            onChange={this.handleChangeAction}
          /></p>
          <p className="numbForm">4-
          <input className="inputAction"
            placeholder={text_static2.all_text}
            type="text"
            name="action4"
            value={this.state.action4}
            onChange={this.handleChangeAction}
          /></p>
          <p className="numbForm">5-
          <input className="inputAction"
            placeholder={text_static2.all_text}
            type="text"
            name="action5"
            value={this.state.action5}
            onChange={this.handleChangeAction}
          /></p>
          {/* ajouter les input a partir d ici*/}
          {this.state.addActions.map((addAction, index) => {
            return (
              <div key={index}>
                <input
                  onChange={e => this.handleChange(e, index)}
                  value={addAction}
                />
              </div>
            );
          })}
          <div className="buttonAction">
          <button className="button_action" onClick={e => this.addAction(e)}><img src={icon_add_action.picture_src}/></button>
        <button className="button_action"onClick={index => this.handleRemove(index)}>
          <img src={icon_remove.picture_src}/>
        </button>
        </div>
          {/* <button type="submit" name="valide">
            Je valide ces actions
          </button> */}
        </form>
        </div>
        
)
}
        }
export default FormAction