import React from 'react';
import axios from "axios";

import './GeneralContainer.css';

import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText';
import TitlePageSympto from '../Component/TiltePageSympto';
import Form from '../Component/Form';


class Sympto4Time extends React.Component {

    state = {
        icon: [],
        text_static: [],
        problem: [],
        // response: [],
        // text_static2: [],
        // text_static3: [],
        // text_static4: [],
        problem_id: 5
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
        const res = await axios.get("http://localhost:3001/problem/5")
        this.setState({problem: res.data[0]});
    };

    

    getIdProblem = () => {
        const {problem_id} = this.state
        const id= this.props.location.state.lastId
        axios.put(`http://localhost:3001/summary/${id}`, {problem_id: problem_id})
          .then(res => {
            console.log("response axios: ", res);
          })
      }


    componentDidMount() {
        this.getHeader();
        this.getTextStatic();
        this.getTitleStatic();
       
        this.getIdProblem()
    }

    render() {
        const{icon,text_static,problem}= this.state

        return (
            <div className="general_container">
                <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
                
                <div className="padding_top_bottom">
                    <HeadingText text_static={text_static.all_text} />
                </div>

                <TitlePageSympto problem={problem} />
                <Form problemId={this.state.problem_id} lastId={this.props.location.state.lastId} redirectionPage={'symptome4'}/>

            </div>
        );
    }
}

export default Sympto4Time;