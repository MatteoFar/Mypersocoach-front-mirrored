import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Source2environment.css";



import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import ForwardStep from "../Component/ForwardStep";
import FormAction from "../Component/FormAction";

class Solution2 extends React.Component {
<<<<<<< HEAD



    state = {
       
        addActions : [],
    }

   
    addAction = () => {
        
        this.setState({ addActions : [...this.state.addActions, ""] })

    }

    getFiveInput =() => {

        this.setState({ addActions : [...this.state.addActions, "","","","",""] })

    }


    handleRemove = (index) => {

        this.state.addActions.splice(index,1)
        this.setState({ addAction : this.state.addActions })

    }
// need to fix by putin a "setState"

    handleChange = (e, index) =>{
    
    this.state.addActions[index] = e.target.value
    this.setState({ addActions : this.state.addActions })
    console.log('action2 :',this.state.addActions);
    
    


    }

    handleSubmit = (e) =>{
        
        e.preventDefault()

        let count = 0
        
        
        for(let i = 0 ; i<this.state.addActions.length; i++){
            if(this.state.addActions[i].length >= 1){
                count++
                console.log('le compteur compte?', count);
            }
            
        }

        if(count >= 5){

            this.props.history.push({
                pathname : '/solution-3',
                state : {     
                addActions :this.state.addActions  
                }
            })
        }
        else{
            console.log('Entrer au moins 5 actions');
            
        }
                 
    }
    
    componentDidMount(){

        this.getFiveInput()

    }
    
    render(){
        
        
        
        return (

            <div>

                <form className ='formAction' onSubmit={this.handleSubmit} id='dynamicInput'>


                    {this.state.addActions.map((addAction, index) =>{
                        return (
                            <div key={index}>

                                <input type ='text' onChange={(e)=>this.handleChange(e, index)} value={addAction}></input>

                            </div>
                            )
                        } 
                    )}
                    <button type='submit'name='valide'>Je valide ces actions</button>

                </form>
                
                <button onClick={(e)=> this.addAction(e)}>Add Action</button>
                <button onClick={(index) => this.handleRemove(index)}>Remove Action</button>

            </div>
        )

    }

=======
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
>>>>>>> dev
}

export default withRouter(Solution2);
