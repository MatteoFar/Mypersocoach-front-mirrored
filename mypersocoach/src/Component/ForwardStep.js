import React from "react";
import "./ForwardStep.css"
import { withRouter } from "react-router-dom";


class ForwardStep extends React.Component{
    state= {
      summaryId:'',
      problem_originId:'',
      isValidate: true,
      // backSubmit: this.props.backSubmit
     
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
          // console.log("qui est là?", this.props.idRespEnvironment)
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
  // console.log('ou es ma redireciton page solution2')
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
      // console.log('ou es ma redireciton page solution3', this.props.addActions)
      
      let count = 0      

      for(let i = 0 ; i<this.props.addActions.length; i++){
          if(this.props.addActions[i].length >= 1){
              count++
              console.log('le compteur compte?', count);
          // console.log("quelle valeur de mon displayerror?", this.state.displayError)
            }
          
      }

      if(count >= 5){
          console.log('test 2 :' ,this.state.displayError);
          
          this.props.history.push({
              pathname : '/solution3',
              state : {    
              // backSubmit: this.state.backSubmit,
              addActions: this.props.addActions,
              summaryId: this.props.summaryId,
              problem_originId: this.props.problem_originId 
              
              }
          })
      }

      else {
            // console.log('entrez 5 action');
            this.setState({ isValidate : false })
            // console.log("quelle valeur de mon displayerror?", this.state.displayError)

      }
    

    }

  // redirection to 'profil' page
else if (this.props.redirectionPage === 'profil') {
 
  
  console.log('ou es ma redireciton page profil')
  
  this.props.history.push({
    pathname: "/profil", 
    state: {
      
      summaryId: this.props.summaryId,
      problem_originId: this.props.problem_originId
    }
    
})
}

}
  
  

  
      render(){
    // console.log("quelle valeur final ?", this.state.displayError)
    // display of c'est bien ça button (first summary) in Symptome2 page
        if(this.props.redirectionPage === 'Source2') {
      // console.log("qui est là?", this.props.idRespEnvironment)
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

          if(this.state.isValidate === false){

            return (
          
              <div>
                <p className='msgError'>Entrer au 5 actions minimum</p>

                <div className="forward_step_container">
                  <button id="forward" href="#" className="buttonForward_Step" type="button" name="" onClick={this.handleClick} >{this.props.text_static3} </button>
                </div>
              </div>

               )
          }

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
