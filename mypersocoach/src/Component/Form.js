import React from "react";
import axios from "axios";

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

        textarea: ''
    }


    handleChangeTextarea = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { textarea } = this.state;
        console.log((textarea))
        axios.post('http://localhost:3001/response', {

            textarea: textarea,
            response_summary: 1,
            summary_id: this.props.summaryId,
            problem_id: 1,
            problem_origin_id: 1

        })
            .then((res => console.log("response axios: ", res)))

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

    componentDidMount() {
        this.getTextarea();
        this.getPlaceholder();
        this.getValidate();
        this.getBack();
    }

    render() {

        const { response, text_static2, text_static3, text_static4 } = this.state

        console.log('pouet pouet', this.state.textarea)

        return (
            <div>
                <form id="form" method="post" action="#" onSubmit={this.handleSubmit}>
                    {/* <Answer response={response} text_static2={text_static2}/> */}
                    {/* <Validate text_static3={text_static3.all_text}/> */}
                    {/* <BackButton text_static4={text_static4.all_text}/> */}

                    <textarea id="textarea" name="textarea" type='text' value={this.state.textarea} maxlength="300" placeholder={text_static2.all_text} onChange={this.handleChangeTextarea}>
                        {response}
                    </textarea>

                    <button id="valid" href="#" className="button_validate" type="submit" name="valid">{text_static3.all_text}</button>

                    <button href="#" className="button_back" type="reset" name="return">{text_static4.all_text}</button>

                </form>
            </div>
        )
    }
}

export default Form;