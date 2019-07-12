import React from 'react'
import axios from "axios";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import BackAction from '../Component/BackAction';

import './Solution3.css';

class Solution3 extends React.Component {

    state = {
        icon: [],
        text_static: [],
        text_static2: [],
        response : '',
    }

    handleClick = (addActions) =>{
        console.log('que passa ?', this.state);
        
        // this.setState({ response : action1 })
        // console.log( 'test target',e.currentTarget.value);
        this.setState({ response : addActions })
  // console.log( 'test target',e.currentTarget.value);
        console.log('test fonction', this.state.response);
      
        // this.props.history.push({
        //     pathname : '/'
        // })
    }

    getHeader = async () => {
        const res = await axios.get("http://localhost:3001/icon/5");
        this.setState({ icon: res.data[0] });
        // .then(data => {
        //   this.setState({ icon: data[0] });
        // });
      };
      
    getTextStatic = async () => {
        const res = await axios.get("http://localhost:3001/text_static/35");
        this.setState({ text_static: res.data[0] });
        // .then(data => {
        // this.setState({ text_static: data[0] });
        // });
        // console.log(res)
      };

      getButtonReturn = async () => {
        const res = await axios.get("http://localhost:3001/text_static/117");
        this.setState({ text_static2: res.data[0] });
        // .then(data => {
        // this.setState({ text_static: data[0] });
        // });
        // console.log(res)
      };

      componentDidMount() {
          this.getHeader();
          this.getTextStatic();
          this.getButtonReturn()
      }



    render(){
        
        const {icon,text_static,text_static2} = this.state;
        
        const action1 = this.props.location.state.action1
        const action2 = this.props.location.state.action2
        const action3 = this.props.location.state.action3
        const action4 = this.props.location.state.action4
        const action5 = this.props.location.state.action5
        // const action1 = this.props.location.state.action1
        // const action2 = this.props.location.state.action2
        // const action3 = this.props.location.state.action3
        // const action4 = this.props.location.state.action4
        // const action5 = this.props.location.state.action5
        const addActions = this.props.location.state.addActions
        console.log('est tu la add action', addActions);
        
        return (

            <div className="solution3_width_height">
            <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
            <HeadingText text_static={text_static.all_text} />
            {/* <RecapSolution /> */}
                
                    {/* <p>{action1}<button onClick={() => this.handleClick(action1)}>Valider</button></p>
                    <p>{action2}<button onClick={() => this.handleClick(action2)}>Valider</button></p>
                    <p>{action3}<button onClick={() => this.handleClick(action3)}>Valider</button></p>
                    <p>{action4}<button onClick={() => this.handleClick(action4)}>Valider</button></p>
                    <p>{action5}<button onClick={() => this.handleClick(action5)}>Valider</button></p> */}

                    {addActions.map(addAction => 
                            <p>{addAction}<button onClick={() => this.handleClick(addActions)}>Valider</button></p>
                        )
                    }

            <BackAction text_static2={text_static2.all_text}/>
            </div>
            
        )
    }
}


export default Solution3;