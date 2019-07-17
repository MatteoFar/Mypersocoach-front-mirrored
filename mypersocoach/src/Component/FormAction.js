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
        summaryId:'',
        backAction : this.props.location.state.addActions,
        validate : false
        
        
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

      removeAction = (e, index) => {
        e.preventDefault()
        if(this.state.addActions.length > 5){
          this.state.addActions.splice(index, 1);
          this.setState({ addActions : this.state.addActions });
        }
        else{
          return
        }
      };
      // need to fix by putin a "setState"
    
      handleChange = ( e, index) => {
        
        this.state.addActions[index] = e.target.value;
        this.setState({ addActions: this.state.addActions});
        console.log("test de add action", this.state.addActions);
        
      };

      getBackAction = () => {

        // this.state.addActions[index] = this.state.backAction
        this.setState({ addActions : this.state.backAction });
      }

     
    
     
      componentDidMount() {
        this.getFiveInput()
        this.getTextStatic3()
        this.getPlaceholderAction()
        // if (this.props.backsubmit == "backSubmit") {
        //   this.deleteResponse();
        // }
      
        if( this.state.backAction == null){
          return
        }
        else{
          this.getBackAction()
        }
       
      }

      render(){            
        // console.log('ici',this.props.location.state.summaryId);
        
      const{text_static2,text_static3}=this.state
      console.log('alors ? :' , this.state.addActions);
      
    
      return (

        <div className="formCenter">

          <form id="dynamicInput" >
      
            {this.state.addActions.map((addAction, index) => {
              return (

                <div key={index}>
                  <p className ='numbForm'>{index + 1}-
                    <input type ='text' onChange={e => this.handleChange(e, index)} value={addAction} className='numbForm'placeholder={text_static2.all_text}/>
                  </p>
                </div>

              );
            }
          )}

            <div className="buttonAction">

                <button className="button_add" onClick={e => this.addAction(e)}>
                  +
                </button>

                <button className="button_remove"onClick={(e, index) => this.removeAction(e, index)}>
                  -
                </button>

            </div>

              <ForwardStep text_static3={text_static3.all_text} addActions={this.state.addActions} summaryId={this.props.location.state.summaryId} redirectionPage={'solution3'} text_static2={text_static2.all_text} isValidate={()=>this.validate}/>
              {/* backSubmit={this.props.backSubmit} */}
        </form>
    </div>
        
      )
    }
}


export default withRouter (FormAction)