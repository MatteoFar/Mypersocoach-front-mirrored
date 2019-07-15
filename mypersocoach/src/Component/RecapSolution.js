import React from 'react'



class RecapSolution extends React.Component {

    state = {

        addActions : this.props.addActions,
        response :'',

    }

    handleClick = (action) =>{
        
        this.setState({ response : action })
        // console.log( 'test target',e.currentTarget.value);
        // console.log('etat de la state reponse :', this.state.response);
      
        // this.props.history.push({
        //     pathname : '/'
        // })
    }


    render(){
        console.log('etat de la state response:', this.state.response);
        
        return (
            <div>

                {this.state.addActions.map(addAction => {

                    return(

                        <div>
                            <p>{addAction}<button onClick={()=> this.handleClick(addAction)}>Valider</button></p>
                        </div>
                    
                        )
                    }
                )}

            </div>
        )

    }
}



export default RecapSolution