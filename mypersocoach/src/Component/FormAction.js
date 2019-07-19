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
        validate : false,
        selectedButton : null
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

    // allow us to add an input to addActions table :  thanks to [...this.state.addActions, ""]


      addAction = (e) => {

        e.preventDefault()
        this.setState({ addActions: [...this.state.addActions, ""] });

      };
    
      // allow us to add five inputs to addActions table : so that the page loads with 5 actions inputs

      getFiveInput =() => {
 
        this.setState({ addActions : [...this.state.addActions, "","","","",""] })

    }

// function that handles removal of action individually 

      removeAction = (e, index) => {
        e.preventDefault()
        
        // allow us to apply selected remove on one specific button
        this.setState({ selectedButton : index })
       
        
        // removal of one action in the table action one section deleted from the index
          this.state.addActions.splice(index, 1);
          this.setState({ addActions : this.state.addActions });
        
      };
     
    
      

      handleChange = ( e, index) => {
        
        this.state.addActions[index] = e.target.value;
        this.setState({ addActions: this.state.addActions});
        
        
      };

      // function thant handles return on Solution2 Mage
      // differents actions stay visibles when we click on the back button

      getBackAction = () => {

        this.setState({ addActions : this.state.backAction });
      }

     

     
      componentDidMount() {
        this.getFiveInput()
        this.getTextStatic3()
        this.getPlaceholderAction()
       
        // when we go from Solution2 to Solution3 we do nothing with backAction
      
        if( this.state.backAction == null){
          return
        }
        // when we return from solution3 to solution2, we call out the getBackAction() function 
        //which allows us to keep the actions origninally filled
        else{
          this.getBackAction()
        }
       
      }

      render(){            
        
        
      const{text_static2,text_static3}=this.state
      
      
    
      return (

        <div className="formCenter">

          <form id="dynamicInput" >
      
            {this.state.addActions.map((addAction, index) => {
              return (

                <div key={index}>
                  
                    {/*  X button to delete actions inputs individually*/}
                  <div className ='numbForm'>
                    <p>{index + 1} - </p>
                    <input type ='text' onChange={e => this.handleChange(e, index)} value={addAction} className='numbForm'placeholder={text_static2.all_text}/>
                    <button className="button_remove"onClick={(e) => this.removeAction(e, index)}>
                      x
                    </button>
                  </div>

                </div>
              );
            }
          )}

            <div className="buttonAction">

                <button className="button_add" onClick={e => this.addAction(e)}>
                  +
                </button>

            </div>

              <ForwardStep text_static3={text_static3.all_text} addActions={this.state.addActions} summaryId={this.props.location.state.summaryId} redirectionPage={'solution3'} text_static2={text_static2.all_text} isValidate={()=>this.validate}/>
              
        </form>
    </div>
        
      )
    }
}


export default withRouter (FormAction)