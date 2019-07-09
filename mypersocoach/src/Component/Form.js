import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";




import './Form.css';

class Form extends React.Component {

    

    state = {
        response: [],
        text_static2: [],
        text_static3: [],
        text_static4: [],
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
        console.log("response à ma réponse", res)
           const idRespEnvironment = res.data.lastResponseId
           localStorage.setItem('idRespEnvironnement',idRespEnvironment)
           console.log("est ce que j'ai mon idenvrionnement",  res.data.lastResponseId)
       
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

else if ( this.props.redirectionPage === 'Source2comportement') {
        
    axios.post('http://localhost:3001/response', {

      textarea: textarea,
      response_summary: this.state.textarea,
      summary_id: this.props.summaryId,
      problem_origin_id: this.props.problem_originId
      // problem_origin_id: 1

  })

  .then((res => { 
      //mettre des conditions de redirection
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

    componentDidUpdate(prevprops, prevstate) {
        
        
   
    
    }
    
    


    componentDidMount() {
        this.getTextarea();
        this.getPlaceholder();
        this.getValidate();
        this.getBack();
        
    }

    


    render() {

        const { response, text_static2, text_static3, text_static4 } = this.state

    //    console.log("est ce que summary-id se charge", this.state.summary_id)
    // console.log('est ce que ma props se charge', this.props.lastId)

        return (
            <div>
                <form id="form" method="post" action="#" onSubmit={this.handleSubmit} onClick={this.test}>
                    

                    <textarea id="textarea" name="textarea" type='text' value={this.state.textarea} maxlength="300" placeholder={text_static2.all_text} onChange={this.handleChangeTextarea}>
                        {response}
                    </textarea>

                    <button id="valid" href="#" className="button_validate" type="submit" name="valid" >{text_static3.all_text}</button >

                    <button href="#" className="button_back" type="reset" name="return">{text_static4.all_text}</button>

                </form>
            </div>
        )
    }
}

export default withRouter(Form);