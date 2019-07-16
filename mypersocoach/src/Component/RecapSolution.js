import React from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";

class RecapSolution extends React.Component {

    state = {

        addActions : this.props.addActions,
        response :'',
        isReply: false,
        summaryId: ''
    }

    // handleClick = (action) =>{
        
    //     this.setState({ response : action })
    //     // console.log( 'test target',e.currentTarget.value);
    //     // console.log('etat de la state reponse :', this.state.response);
      
    //     // this.props.history.push({
    //     //     pathname : '/'
    //     // })
    // }



    handleClick = async (action) =>{
       
        // console.log('que passa ?',  addAction);
       
        // this.setState({response: addAction}, function () {
        //     console.log('ma state response ouvre toi', this.state.response);
        // })
      
        console.log('est pas là ma state?',this.state.response);
await this.setState({response: action});
    console.log('si elle est là',this.state.response);

        this.setState({summaryId: this.props.summaryId})
        console.log('summaryid ou es tu?', this.state.summaryId)
        this.setState({isReply: !this.state.isReply, })
       
        console.log('test fonction', this.state.response);
        axios.post('http://localhost:3001/action', {

            
            text_response: this.state.response,
            summary_id: this.state.summaryId

        })
        .then((res => {
            
            
            
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
        console.log('etat de la state summaryId:', this.props.summaryId);
        
        return (
            <div>

                {this.state.addActions.map(addAction => {
                    if (addAction.length >=1) {
                    return(

                        <div>
                            <p>{addAction}<button onClick={()=> this.handleClick(addAction)}>Valider</button></p>
                        </div>
                    
                        )
                    }
                     else {
                    return
                 }

                    }
                )}

            </div>
        )
}
       
    
    }




export default withRouter(RecapSolution);