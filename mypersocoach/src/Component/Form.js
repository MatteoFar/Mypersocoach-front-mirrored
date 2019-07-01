import React from "react";
import axios from "axios";

import Answer from './Answer';
import Validate from './Validate';
import BackButton from './BackButton';

import '../Screen/GeneralContainer.css';

class FormConflict extends React.Component {

    state = {
        response: [],
        text_static2: [],
        text_static3: [],
        text_static4: []
    }

     getTextarea = async() => {
          //Vérifier ce qu'il faut mettre en ciblage
         const res = await axios.get("http://localhost:3001/response")
         this.setState({response: res.data[0]});
     }

     getPlaceholder = async() => {
         const res = await axios.get("http://localhost:3001/text_static/140")
         this.setState({text_static2: res.data[0]});
     };

     getValidate = async() => {
         const res = await axios.get("http://localhost:3001/text_static/116")
         this.setState({text_static3: res.data[0]});
     };

     getBack = async() => {
         const res = await axios.get("http://localhost:3001/text_static/117")
         this.setState({text_static4: res.data[0]});
     };

     componentDidMount() {
         this.getTextarea();
         this.getPlaceholder();
         this.getValidate();
         this.getBack();
     }

    render() {

        const{response,text_static2,text_static3,text_static4}= this.state

        return (
            <div className="general_container">
                {/* Mettre l'url cible dans "action" */}
                <form id="form" method="post" action="#">
                    <Answer response={response} text_static2={text_static2}/>
                    <Validate text_static3={text_static3.all_text}/>
                    <BackButton text_static4={text_static4.all_text}/>
                </form>
            </div>
        )
    }
}

export default Form;