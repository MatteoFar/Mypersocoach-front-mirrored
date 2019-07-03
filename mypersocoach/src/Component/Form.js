import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

// import Answer from './Answer';
// import Validate from './Validate';
// import BackButton from './BackButton';


import './Form.css';

class Form extends React.Component {

    

    state = {
        response: [],
        text_static2: [],
        text_static3: [],
        text_static4: [],
        textarea: '',
        lastId: this.props.lastId,
        lastResponseId: ''
    }


    handleChangeTextarea = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }


    

    handleSubmit = (e) => {
        e.preventDefault();
        const { textarea } = this.state;
        // allows us to go the symptome 2 page thanks to history.push and tranfert lastId recap as props

            
            axios.post('http://localhost:3001/response', {

            textarea: textarea,
            response_summary: this.state.textarea,
            summary_id: this.props.lastId,
            problem_id: this.props.problemId,
            problem_origin_id: 1

        })
            .then((res => {
                // console.log("response axios: Form", res);
                const lastResponseId = res.data.lastResponseId
                this.setState({ lastResponseId: lastResponseId})
               // const lastResponseId = this.state.lastResponseId;
                // console.log('hihihihi!', this.state.lastResponseId)
         
                
                
                // console.log('last resp ou es tu? je ne te voie pas', res.data.lastResponseId)
               
                console.log('last response ', this.state.lastResponseId)

                this.props.history.push({
                    pathname: "/symptome2", 
                    state: {

                        lastId: this.props.lastId, 
                        lastResponseId: lastResponseId
                    
                    }

                    });
              }))
        }
        


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
        
        
    // console.log( 'youhou mes props et mes states', prevprops)
    // console.log('prev state :', prevstate);
    
    }
    
    


    componentDidMount() {
        this.getTextarea();
        this.getPlaceholder();
        this.getValidate();
        this.getBack();
        
    }

    


    render() {

        const { response, text_static2, text_static3, text_static4 } = this.state

        // console.log('pouet pouet', this.state.lastResponseId  )
        // console.log('mounted component');
        

        return (
            <div>
                <form id="form" method="post" action="#" onSubmit={this.handleSubmit} onClick={this.test}>
                    {/* <Answer response={response} text_static2={text_static2}/> */}
                    {/* <Validate text_static3={text_static3.all_text}/> */}
                    {/* <BackButton text_static4={text_static4.all_text}/> */}

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