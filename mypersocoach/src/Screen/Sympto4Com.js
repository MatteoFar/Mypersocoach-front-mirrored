import React from 'react';
import axios from "axios";

import './GeneralContainer.css';

import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText';
import TitlePageSympto from '../Component/TiltePageSympto';
import Form from '../Component/Form';


class Sympto4Com extends React.Component {

    state = {
        icon: [],
        text_static: [],
        problem: [],
        // response: [],
        // text_static2: [],
        // text_static3: [],
        // text_static4: [],
        problem_id: 4
    };

    
    getHeader = async() => {
        const res = await axios.get("http://localhost:3001/icon/27")
        this.setState({icon: res.data[0]});
    };

    getTextStatic = async() => {
        const res = await axios.get("http://localhost:3001/text_static/14")
        this.setState({text_static: res.data[0]});
    };

    getTitleStatic = async() => {
        const res = await axios.get("http://localhost:3001/problem/4")
        this.setState({problem: res.data[0]});
    };

    // getTextarea = async() => {
    //     Vérifier ce qu'il faut mettre en ciblage
    //     const res = await axios.get("http://localhost:3001/response")
    //     this.setState({response: res.data[0]});
    // }

    // getPlaceholder = async() => {
    //     const res = await axios.get("http://localhost:3001/text_static/140")
    //     this.setState({text_static2: res.data[0]});
    // };

    // getValidate = async() => {
    //     const res = await axios.get("http://localhost:3001/text_static/116")
    //     this.setState({text_static3: res.data[0]});
    // };

    // getBack = async() => {
    //     const res = await axios.get("http://localhost:3001/text_static/117")
    //     this.setState({text_static4: res.data[0]});
    // };

    getIdProblem = () => {
        const {problem_id} = this.state
        const id= this.props.location.state.lastId
        axios.put(`http://localhost:3001/summary/${id}`, {problem_id: problem_id})
          .then(res => {
            console.log("response axios: commmmm", res);
          })
      }

    componentDidMount() {
        this.getHeader();
        this.getTextStatic();
        this.getTitleStatic();
        // this.getTextarea();
        // this.getPlaceholder();
        // this.getValidate();
        // this.getBack();
        this.getIdProblem()
    }

    render() {
        const{icon,text_static,problem}= this.state

        return (
            <div className="general_container">
                <IconMain icon={icon.picture_src} />
                <HeadingText text_static={text_static.all_text} />
                <TitlePageSympto problem={problem} />
                <Form problemId={this.state.problem_id} lastId={this.props.location.state.lastId}/>

            </div>
        );
    }
}

export default Sympto4Com;