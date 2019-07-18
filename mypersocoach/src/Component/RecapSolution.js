import React from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";

class RecapSolution extends React.Component {

    state = {

        addActions : this.props.addActions,
        response :'',
        isReply: false,
        summaryId: '',
        
    }

 



    handleClick = async (action, index) =>{
       
       
   
        this.setState({response: action}); 
      console.log('est pas là ma state?',this.state.response);
        await this.setState({response: action});
    console.log('si elle est là',this.state.response);

        this.setState({
            summaryId: this.props.summaryId, 
            isReply: !this.state.isReply
        })
        
        console.log('is reply', this.state.isReply)
        
       
       
     
        axios.post('http://localhost:3001/action', {

            
            text_response: this.state.response,
            summary_id: this.state.summaryId

        })
    
        .then((res => {
            const respActionId = res.data.respActionId
            localStorage.setItem('idResponse', respActionId)
            
            
            this.props.history.push({
                pathname: "/solution4", 
                state: {

                    summaryId: this.state.summaryId

                    }
            });
          }
    ))

        
    }

    render(){
        
        return (
            <div>

                {this.state.addActions.map( (addAction, index) => {
                    
                        if(addAction.length >= 1 ){
                            return(
                                
                                <div>
                                    <p>{addAction}<button 
                                       

                                    onClick={()=> this.handleClick(addAction, index)}>Valider</button></p>
                                
                                
                                
                                
                                </div>
                            )
                        
                        }

                        else{
                            
                            return null
                        }
                        
                    }

                    
                )}

            </div>
        )
    }
       
    
}




export default withRouter(RecapSolution);