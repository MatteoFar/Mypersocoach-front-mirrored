import React from 'react'



class Solution3 extends React.Component {


    state = {
        response : '',
    }

    handleClick = (action1) =>{
        console.log('que passa ?', this.state);
        
        this.setState({ response : action1 })
  // console.log( 'test target',e.currentTarget.value);
        console.log('test fonction', this.state.response);
      
        
        

        // this.props.history.push({
        //     pathname : '/'
        // })
    }



    render(){
        const action1 = this.props.location.state.action1
        const action2 = this.props.location.state.action2
        const action3 = this.props.location.state.action3
        const action4 = this.props.location.state.action4
        const action5 = this.props.location.state.action5
        const addActions = this.props.location.state.addActions
        console.log('est tu la add action', addActions);
        
        return(

            <div>
                
                    <p>{action1}<button onClick={() => this.handleClick(action1)}>Valider</button></p>
                    <p>{action2}<button onClick={() => this.handleClick(action2)}>Valider</button></p>
                    <p>{action3}<button onClick={() => this.handleClick(action3)}>Valider</button></p>
                    <p>{action4}<button onClick={() => this.handleClick(action4)}>Valider</button></p>
                    <p>{action5}<button onClick={() => this.handleClick(action5)}>Valider</button></p>

                    {addActions.map(addAction => 
                            <p>{addAction}<button onClick={() => this.handleClick(action1)}>Valider</button></p>
                        )
                    }

            </div>
            
        )
    }
}






export default Solution3