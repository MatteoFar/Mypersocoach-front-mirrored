import React from 'react'
import { withRouter } from 'react-router-dom'
import './Solution2.css'




class Solution2 extends React.Component {



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

}









export default withRouter(Solution2)