import React from 'react'
import { withRouter } from 'react-router-dom'
import './Solution2.css'




class Solution2 extends React.Component {



    state = {

        // action1 : '',
        
        // action2 : '',

        // action3: '',

        // action4 : '',

        // action5 : '',

        addActions : [],
        isDisabled : true

    }

    // When filling in the first five actions, update value of differents action state
    handleChangeAction = (e) =>{
    
        this.setState({ [e.target.name] : e.target.value })
    }

   // handle value of new action input (beyond five actions) when click on add action

    handleChange = (e, index) =>{
    this.state.addActions[index] = e.target.value
    this.setState({ addActions : this.state.addActions })
    
    
}
    
    // add 
    addAction = () => {
        
        this.setState({ addActions : [...this.state.addActions, ""] })

    }

    handleRemove = (index) => {

        this.state.addActions.splice(index,1)
        this.setState({ addAction : this.state.addActions })

    }


    handleSubmit = (e) =>{
        
        e.preventDefault()

        this.props.history.push({
            pathname : '/solution-3',
            state : {

                // action1 : this.state.action1,
                // action2 : this.state.action2,
                // action3 : this.state.action3,
                // action4 : this.state.action4,
                // action5 : this.state.action5,
                addActions :this.state.addActions
               
            }
        })

    }

    isDisabled(){
        
       
        if ( this.state.addActions.length <=5) {
           
            return true;   // for disable button return true otherwise false
    
    
    }
       else {
            return false
       } 
     
    
    }



    render(){
        console.log('test de la state' , this.state);
        console.log('test de add action', this.state.addActions);
        
        
        return (

            <div>

                <form className ='formAction' onSubmit={this.handleSubmit} id='dynamicInput'>



                    {/* <input type ='text' name='action1' value ={this.state.action1} onChange={this.handleChangeAction}></input>
                    <input type ='text' name='action2' value ={this.state.action2} onChange={this.handleChangeAction}></input>
                    <input type ='text' name='action3' value ={this.state.action3} onChange={this.handleChangeAction}></input>
                    <input type ='text' name='action4' value ={this.state.action4} onChange={this.handleChangeAction}></input>
                    <input type ='text' name='action5' value ={this.state.action5} onChange={this.handleChangeAction}></input> */}
                    {/* ajouter les input a partir d ici*/}
                    {this.state.addActions.map( (addAction, index) =>{
                        return (
                            <div key={index}>

                                <input onChange={(e)=>this.handleChange(e, index)} value={addAction}   ></input>

                            </div>
                        )
                    } )}
                    <button type='submit'name='valide' disabled={this.isDisabled()} >Je valide ces actions</button>

                </form>
                
                <button onClick={(e)=> this.addAction(e)}>Add Action</button>
                <button onClick={(index) => this.handleRemove(index)}>Remove Action</button>

            </div>
        )

    }

}









export default withRouter(Solution2)