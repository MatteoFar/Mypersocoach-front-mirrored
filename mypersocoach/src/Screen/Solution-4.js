import React from 'react';
import axios from "axios";

import './GeneralContainer.css';

import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText';
import FormTime from '../Component/FormTime';
import TitlePageSympto from '../Component/TiltePageSympto';
import Form from '../Component/Form';


class Solution4 extends React.Component {

    state = {
        icon: [],
        text_static: [],
        problem: [],
        // response: [],
        // text_static2: [],
        // text_static3: [],
        // text_static4: [],
        // problem_id: 4
    };

    
    getHeader = async() => {
        const res = await axios.get("http://localhost:3001/icon/5")
        this.setState({icon: res.data[0]});
    };

    getTextStatic = async() => {
        const res = await axios.get("http://localhost:3001/text_static/36")
        this.setState({text_static: res.data[0]});
    };

    getTitleStatic = async() => {
        const res = await axios.get("http://localhost:3001/problem/4")
        this.setState({problem: res.data[0]});
    };



    // getIdProblem = () => {
    //     const {problem_id} = this.state
    //     const id= this.props.location.state.lastId
    //     axios.put(`http://localhost:3001/summary/${id}`, {problem_id: problem_id})
    //       .then(res => {
    //         console.log("response axios: commmmm", res);
    //       })
    //   }

    componentDidMount() {
        this.getHeader();
        this.getTextStatic();
        this.getTitleStatic();
        // this.getIdProblem()
    }

    render() {
        
        console.log('hola summaryid',this.props.location.state.summaryId )
        const{icon,text_static,problem}= this.state
        return (
            <div className="general_container">
                <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
                <HeadingText text_static={text_static.all_text} />
                <FormTime summaryId={this.props.location.state.summaryId}/>
                {/* <TitlePageSympto problem={problem} /> */}
                {/* <Form 
                // problemId={this.state.problem_id} lastId={this.props.location.state.lastId} redirectionPage={'symptome4'} 
                /> */}

            </div>
        );
    }
}

export default Solution4;