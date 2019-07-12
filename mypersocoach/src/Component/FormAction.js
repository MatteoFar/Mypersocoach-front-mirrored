import React from "react";
import { withRouter } from "react-router-dom";
import ForwardStep from "./ForwardStep"
import axios from"axios"
import "./FormAction.css"



class FormAction extends React.Component{

    state = {
      
        addActions: [],
        text_static2:[],
        text_static3: [],
        summaryId:''
    }


      getButtonValidate= async () => {
        const res = await axios.get("http://localhost:3001/icon/33");
        this.setState({ validateButton: res.data[0] });
      };

      getTextStatic3 = async () => {
        const res = await axios.get("http://localhost:3001/text_static/128");
        this.setState({ text_static3: res.data[0] });
      };


      getPlaceholderAction = async () => {
        const res = await axios.get("http://localhost:3001/text_static/141")
        this.setState({ text_static2: res.data[0] });
      };

    
      addAction = (e) => {

        e.preventDefault()
        this.setState({ addActions: [...this.state.addActions, ""] });

      };
    
      getFiveInput =() => {
 
        this.setState({ addActions : [...this.state.addActions, "","","","",""] })

    }

      handleRemove = (e, index) => {
        console.log('shit');
        
        e.preventDefault()
        this.state.addActions.splice(index, 1);
        this.setState({ addActions : this.state.addActions });
      };
      // need to fix by putin a "setState"
    
      handleChange = ( e, index) => {
        
        this.state.addActions[index] = e.target.value;
        this.setState({ addActions: this.state.addActions });
        console.log("test de add actino", this.state.addActions);
      };

      
    
     
      componentDidMount() {
        this.getFiveInput()
        this.getTextStatic3()
        this.getPlaceholderAction()
        
      }

      render(){
        // console.log('ici',this.props.location.state.summaryId);
        
      const{icon_add_action,icon_remove,text_static2,text_static3}=this.state

      return (

        <div className="formCenter">

          <form id="dynamicInput" >
      
            {this.state.addActions.map((addAction, index) => {
              return (

                <div key={index}>
                  <p className ='numbForm'>{index + 1}-<input type ='text' onChange={e => this.handleChange(e, index)} value={addAction} className='numbForm'placeholder={text_static2.all_text}/></p>
                </div>

              );
            }
          )}

            <div className="buttonAction">

                <button className="button_add" onClick={e => this.addAction(e)}>
                  +
                </button>

                <button className="button_remove"onClick={(e, index) => this.handleRemove(e, index)}>
                  -
                </button>

            </div>

              <ForwardStep text_static3={text_static3.all_text} addActions={this.state.addActions} summaryId={this.props.location.state.summaryId} redirectionPage={'solution3'} text_static2={text_static2.all_text}/>
       
        </form>
    </div>
        
      )
    }
}


export default withRouter (FormAction)