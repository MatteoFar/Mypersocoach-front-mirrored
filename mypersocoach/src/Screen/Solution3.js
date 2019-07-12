import React from 'react'



class Solution3 extends React.Component {


    state = {
        response : '',
    }

    handleClick = (action, index) =>{
        console.log('que passa ?', this.state);
        
        this.setState({ response : action[index] })
  // console.log( 'test target',e.currentTarget.value);
        console.log('test fonction', this.state.response);
      
        
        

        // this.props.history.push({
        //     pathname : '/'
        // })
    }



    render(){
        
        const addActions = this.props.location.state.addActions
        console.log('cest quoi ce truc', addActions);
        
        return(

            <div>
                
                    {addActions.map(addAction => 

                        <div>
                            <p>{addAction}<button onClick={()=> this.handleClick(addActions)}>Valider</button></p>
                        </div>
                    )}

            </div>
            
        )
        
        
    }
}






export default Solution3