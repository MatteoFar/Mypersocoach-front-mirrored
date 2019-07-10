import React from 'react'
import { withRouter } from 'react-router-dom'
import './Solution2.css'




class Solution2 extends React.Component {



    state = {

        action1 : '',
        
        action2 : '',

        action3: '',

        action4 : '',

        action5 : '',

        addActions : [],

    }


    handleChangeAction = (e) =>{
    
        this.setState({ [e.target.name] : e.target.value })
    }

    addAction = () => {
        
        this.setState({ addActions : [...this.state.addActions, ""] })

    }

    handleRemove = (index) => {

        this.state.addActions.splice(index,1)
        this.setState({ addAction : this.state.addActions })

    }


    handleChange = (e, index) =>{
    this.state.addActions[index] = e.target.value
    this.setState({ addActions : this.state.addActions })
    console.log('test de add actino', this.state.addActions);
    
    
    }

    handleSubmit = (e) =>{
        
        e.preventDefault()

        this.props.history.push({
            pathname : '/solution-3',
            state : {

                action1 : this.state.action1,
                action2 : this.state.action2,
                action3 : this.state.action3,
                action4 : this.state.action4,
                action5 : this.state.action5,
                addActions :this.state.addActions

            }
        })

    }

    render(){
        console.log('test action' , this.state);
        
        
        
        return (

            <div>

                <form className ='formAction' onSubmit={this.handleSubmit} id='dynamicInput'>



                    <input type ='text' name='action1' value ={this.state.action1} onChange={this.handleChangeAction}></input>
                    <input type ='text' name='action2' value ={this.state.action2} onChange={this.handleChangeAction}></input>
                    <input type ='text' name='action3' value ={this.state.action3} onChange={this.handleChangeAction}></input>
                    <input type ='text' name='action4' value ={this.state.action4} onChange={this.handleChangeAction}></input>
                    <input type ='text' name='action5' value ={this.state.action5} onChange={this.handleChangeAction}></input>
                    {/* ajouter les input a partir d ici*/}
                    {this.state.addActions.map( (addAction, index) =>{
                        return (
                            <div key={index}>

                                <input onChange={(e)=>this.handleChange(e, index)} value={addAction}></input>

                            </div>
                        )
                    } )}
                    <button type='submit'name='valide'>Je valide ces actions</button>

                </form>
                
                <button onClick={(e)=> this.addAction(e)}>Add Action</button>
                <button onClick={(index) => this.handleRemove(index)}>Remove Action</button>

            </div>
        )

    }

}









export default withRouter(Solution2)