import React from "react";
import "./ForwardStep.css"
import { withRouter } from "react-router-dom";


class ForwardStep extends React.Component{

    state= {

      summaryId:'',
      problem_originId:'',
      isValidate: true,
      respAction: [],
      response:[],
      responseEnvironnement: [],
      responseCroyance: [], 
      responseCapacite: [], 
      responseComportement:[],
      date: []
     
    }
  
    
  handleClick = () => {
    
    // redirection to source2 page when coming from Symptome2 : first summary "ton problème actuel est"

    if(this.props.redirectionPage === 'Source2') {
      this.props.history.push({
          pathname: "/Source2", 
          state: {summaryId: this.props.summaryId}
          });
      } 
      
    // redirection to source3environnement Page

    else if (this.props.redirectionPage === 'source3_environment') {
        this.props.history.push({
        pathname: "/source3_environment", 
        state: {

              summaryId: this.props.summaryId,
              problem_originId: this.props.problem_originId,
            
            } 
        
        });

      }

    // redirection to source3comportement Page

    else if (this.props.redirectionPage === 'source3_comportement') {
          this.props.history.push({
            pathname: "/source3_comportement", 
            state: {
            
              summaryId: this.props.summaryId,
              problem_originId: this.props.problem_originId

            }
          
        })
    }


    // redirection to source3capacités page

    else if (this.props.redirectionPage === 'source3_capacites') {
          this.props.history.push({
            pathname: "/source3_capacites", 
            state: {
            
            summaryId: this.props.summaryId,
            problem_originId: this.props.problem_originId
          
          }
        
      })
    }

    // redirection to source3croyance page

    else if (this.props.redirectionPage === 'source3_croyances') {
        this.props.history.push({
          pathname: "/source3_croyances", 
          state: {
          
            summaryId: this.props.summaryId,
            problem_originId: this.props.problem_originId
        
          }  
    })
  }

    // redirection to solution1 page

    else if (this.props.redirectionPage === 'solution1') {
          this.props.history.push({
            pathname: "/solution1", 
            state: {
          
              summaryId: this.props.summaryId,
              problem_originId: this.props.problem_originId

            }
        })
    }

    // redirection to solutions-2 page

    else if (this.props.redirectionPage === 'solution2') {
          this.props.history.push({
            pathname: "/solution2", 
            state: {
          
              summaryId: this.props.summaryId,
              problem_originId: this.props.problem_originId
      
            }  
        })
    } 

    // redirection to solution3 page

    else if (this.props.redirectionPage === 'solution3') {
      
      let count = 0     

      // allow if action input is filled-out

      for(let i = 0 ; i<this.props.addActions.length; i++){
          if(this.props.addActions[i].length >= 1){
              count++
            }
          
      }

      // if is the 5 input is fulled-out we redirection on solution3 page

      if(count >= 5){
          
          this.props.history.push({
              pathname : '/solution3',
              state : {    
            
              addActions: this.props.addActions,
              summaryId: this.props.summaryId,
              problem_originId: this.props.problem_originId 
              
              }
          })
      }

      // if is not the state isValidate is setting on false

      else {

            this.setState({ isValidate : false })

      }

    

  }

  // redirection to 'profil' page

        else if (this.props.redirectionPage === 'profil') {
        
                    
          this.props.history.push({
              pathname: "/profil", 
              state: {

                date: this.props.date,
                respAction: this.props.respAction,
                response: this.props.response,
                responseEnvironnement: this.props.responseEnvironnement,
                responseCroyance: this.props.responseCroyance, 
                responseCapacite: this.props.responseCapacite, 
                responseComportement: this.props.responseComportement,
                summaryId: this.props.summaryId,
                problem_originId: this.props.problem_originId
              
              }
            
          })
        }

} // end of the function handleClick 
  
  

  
      render(){

        // redirection with "c'est bien ça" button in Symptome2 in order to go to Source2 (first summary)


        if (this.props.redirectionPage === 'Source2') {
      
          return (

            <div className="forward_step_container">
              <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.text_static3} </button>
            </div>

             );
        }

        // display of source2environnement, source2comportement, source2capacité with "oui" button 
      
        else if ( this.props.redirectionPage === 'source3_croyances' || 
                  this.props.redirectionPage === 'source3_environment'|| 
                  this.props.redirectionPage === 'source3_comportement'||
                  this.props.redirectionPage === 'source3_capacites') {

                  return (

                    <div className="forward_step_container">
                      <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.text_static2}</button>
                    </div>

                    );

             }

      // display of "ajouter des Actions" in Solution1

      else if (this.props.redirectionPage === 'solution2'){
   
          return (

          <div className="forward_step_container">
            <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.text_static4} </button>
          </div>

          );

    }


      // display of "Je valide ces actions" in solution2 page

      else if (this.props.redirectionPage === 'solution3'){


          // if isValidate false we return a message error with the button and button can't be clicked
          // cf line 160

          if(this.state.isValidate === false){

            return (
              
              <div>
                <div className='msgError'>                
                  <p >Entre 5 actions minimum</p>
                </div>

                <div className="forward_step_container">
                  <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.text_static3} </button>
                </div>
              </div>

               )
          }
        
          // we just return button and button is activated

          else {
            return (

            <div className="forward_step_container">
            <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.text_static3} </button>
          </div>
        
              )
          }
        }
    

        // display of "Je valide" in Saut1

        else if (this.props.redirectionPage === 'profil'){
          return (

            <div className="forward_step_container">
              <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.text_static6} </button>
            </div>

            );

          }



      // display of "oui c'est exactement ça" in reformulation page

      else {

        return (

          <div className="forward_step_container">
            <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.textButtonYes} </button>
          </div>
        
          );
      
        }

    
    } 
    
}



export default withRouter(ForwardStep);
