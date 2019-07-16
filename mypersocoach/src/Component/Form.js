import React from "react";
import axios from "axios";
import { withRouter, NavLink } from "react-router-dom";

import './Form.css';

class Form extends React.Component {

    

    state = {
        response: [],
        text_static2: [],
        text_static3: [],
        text_static4: [],
        text_static5:[],
        textarea: '',
        summary_id: this.props.lastId,
        problem_origin_id: this.props.problem_originId,
      
        
    }


    handleChangeTextarea = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { textarea } = this.state;
        // allows us to go the symptome 2 page thanks to history.push and tranfert lastId recap as props
        // first condition 
        
        if (this.props.redirectionPage === 'symptome4') {
            
            axios.post('http://localhost:3001/response', {

            textarea: textarea,
            response_summary: this.state.textarea,
            summary_id: this.props.lastId,
            problem_id: this.props.problemId,
            // problem_origin_id: 1

        })
            .then((res => {
                this.props.history.push({
                    pathname: "/symptome2", 
                    state: {

                        summary_id: this.props.lastId,

                        }
                });
              }
        ))
       
       
        } 
      // another condition 
      else if ( this.props.redirectionPage === 'Source2environnement') {
        
      axios.post('http://localhost:3001/response', {

        textarea: textarea,
        response_summary: this.state.textarea,
        summary_id: this.props.summaryId,
        problem_origin_id: this.props.problem_originId
        // problem_origin_id: 1

    })

    .then((res => { 
        //mettre des conditions de redirection
        //recup de lastid de response
       
        console.log("que fais tu button valider")

           const idRespEnvironment = res.data.lastResponseId
          
           
            localStorage.setItem('idRespEnvironnement', idRespEnvironment)
        
        

           
       
        this.props.history.push({
                pathname: "/source2comportement", 
                state: {
                    
                    summaryId: this.props.summaryId,       
                    problem_origin_id: this.props.problem_originId

                }
            });
        }
    ))
}

// redirection to source2capacités

else if ( this.props.redirectionPage === 'Source2comportement') {
        
    axios.post('http://localhost:3001/response', {

      textarea: textarea,
      response_summary: this.state.textarea,
      summary_id: this.props.summaryId,
      problem_origin_id: this.props.problem_originId
      

  })

  .then((res => { 
      
      const idRespComportement = res.data.lastResponseId
      localStorage.setItem('idRespComportement',idRespComportement)
      
      console.log('est ce que jai mon id comportement', idRespComportement);
      
      this.props.history.push({
              pathname: "/source2capacites", 
              state: {
                  
                 
                  summaryId: this.props.summaryId, 
                  problem_origin_id: this.props.problem_originId 

                }
            })
        }
    ))
}

else if ( this.props.redirectionPage === 'Source2croyances') {
        
    axios.post('http://localhost:3001/response', {

      textarea: textarea,
      response_summary: this.state.textarea,
      summary_id: this.props.summaryId,
      problem_origin_id: this.props.problem_originId
      // problem_origin_id: 1

  })

  .then((res => { 
      //mettre des conditions de redirection
      console.log("response à ma réponse", res)
      
      const idRespCapacite = res.data.lastResponseId
      localStorage.setItem('idRespCapacite', idRespCapacite) 

      console.log("est ce que j'ai mon idcapacite",  res.data.lastResponseId)
   
          this.props.history.push({
              pathname: "/source2croyances", 
              state: {

                  
                  summaryId: this.props.summaryId,
                  problem_origin_id: this.props.problem_originId    

                }
            })
  
        }
    ))
}

else if ( this.props.redirectionPage === 'reformulation') {
        
    axios.post('http://localhost:3001/response', {

      textarea: textarea,
      response_summary: this.state.textarea,
      summary_id: this.props.summaryId,
      problem_origin_id: this.props.problem_originId
      // problem_origin_id: 1

  })

  .then((res => { 
     
        console.log("response à ma réponse", res)
        //    const idRespCroyance = res.data.lastResponseId
           console.log("est ce que j'ai mon idcroyance",  res.data.lastResponseId)
           const idRespCroyance = res.data.lastResponseId
           localStorage.setItem('idRespCroyance', idRespCroyance) 
        
           
        this.props.history.push({
                pathname: "/reformulation", 
                state: {
                    
                    
                    summaryId: this.props.summaryId,       
                    problem_origin_id: this.props.problem_originId

                }
            });


  }
  ))
}


}   


// another c}
        
    getTextarea = async () => {
        //Vérifier ce qu'il faut mettre en ciblage
        const res = await axios.get("http://localhost:3001/response")
        this.setState({ response: res.data[0] });
    }

    getPlaceholder = async () => {
        const res = await axios.get("http://localhost:3001/text_static/140")
        this.setState({ text_static2: res.data[0] });
    };

    getValidate = async () => {
        const res = await axios.get("http://localhost:3001/text_static/116")
        this.setState({ text_static3: res.data[0] });
    };

    getBack = async () => {
        const res = await axios.get("http://localhost:3001/text_static/117")
        this.setState({ text_static4: res.data[0] });
    };

    getBack2 = async () => {
        const res = await axios.get("http://localhost:3001/text_static/119")
        this.setState({ text_static5: res.data[0] });
    };
    
    
    
    //for the "Je ne suis pas sur" button
   
   
   handleClick = () => {
      //redirection for "je ne suis pas sûr button" in Source 3 envrionnement
      // we go one step back to Source2envrionnement
      
        if(this.props.redirectionPage === 'Source2environnement') {
        this.props.history.push({
            pathname: "/Source2", 
            state: {summaryId: this.props.summaryId}
            });
         
      }
    //redirection for "je ne suis pas sûr " in source 3 comportement
    // we go one step back to Source2comportement
    else if(this.props.redirectionPage === 'Source2comportement') {
        
        this.props.history.push({
            pathname: "/source2comportement", 
            state: {summaryId: this.props.summaryId}
            });
         console.log("que passa with button valider")
      }
     // reditection for "je ne suis pas sûr " in source 3 capacité
     // we go one step back to Source2croyances
      else if(this.props.redirectionPage === 'Source2croyances') {
        this.props.history.push({
            pathname: "/source2capacites", 
            state: {summaryId: this.props.summaryId}
            });
         
      }
  // reditection for "je ne suis pas sûr " in source 3 croyances
  // we go one step back to Source2croyances
      else if(this.props.redirectionPage === 'reformulation') {
        this.props.history.push({
            pathname: "/source2croyances", 
            state: {summaryId: this.props.summaryId}
            });
         
      }



    }


    componentDidMount() {
        this.getTextarea();
        this.getPlaceholder();
        this.getValidate();
        this.getBack();
        this.getBack2();
        
    }

    
    render() {

        const { response, text_static2, text_static3, text_static4, text_static5 } = this.state

   

// this return display the form with "retour" button in symptome4_compoents : synmpto4 conflict, symptome4_performance
    if (this.props.redirectionPage === 'symptome4'){
        return (
            <div>
                <form id="form" method="post" action="#" onSubmit={this.handleSubmit} onClick={this.test}>
                    

                    <textarea id="textarea" name="textarea" type='text'required value={this.state.textarea} maxlength="300" placeholder={text_static2.all_text} onChange={this.handleChangeTextarea}>
                        {response}
                    </textarea>
                    {/* valider button */}
                    
                    <button id="valid" href="#" className="button_validate" type="submit" name="valid" >{text_static3.all_text}</button >

                    {/* "Retour" button */}

                    <NavLink className="navlink" to="/symptome3">
                        <button href="#" className="button_back" type="reset" name="return">{text_static4.all_text} </button>
                    </NavLink>

                </form>
            
            
            </div>
        )
    }
    
    
    // this return display the form with "je n'en suis pas sûr" button" in Source3 evnvrionnement, source3 behavior ...
        else {

            return (
                <div>
                    <form id="form" method="post" action="#" onSubmit={this.handleSubmit} >
                        
    
                        <textarea id="textarea" name="textarea" type='text'required value={this.state.textarea} maxlength="300" placeholder={text_static2.all_text} onChange={this.handleChangeTextarea}>
                            {response}
                        </textarea>


                        {/* valider button */}
                        <button id="valid" href="#" className="button_validate" type="submit" name="valid" >{text_static3.all_text}</button >


                        {/* "Je n'en suis pas sûr" button */}
                        <div className="navlink" >
                            <button href="#" className="button_back" type="reset" name="return" onClick={this.handleClick} >{text_static5.all_text} </button>
                    </div>
    
                    </form>
                  
                </div>
            )  

        }



    }
}

export default withRouter(Form);