import React from 'react'
import axios from "axios";

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import BackAction from '../Component/BackAction';
import { withRouter } from "react-router-dom";

class Solution3 extends React.Component {

    state = {
        icon: [],
        text_static: [],
        text_static2: [],
        response : '',
        isReply: false,
        summaryId: ''
    }

    handleClick = async (addAction) =>{
       
        // console.log('que passa ?',  addAction);
       
        // this.setState({response: addAction}, function () {
        //     console.log('ma state response ouvre toi', this.state.response);
        // })
      
        console.log('est pas là ma state?',this.state.response);
await this.setState({response: addAction});
    console.log('si elle est là',this.state.response);


        this.setState({isReply: !this.state.isReply, })
       
        console.log('test fonction', this.state.response);
        axios.post('http://localhost:3001/action', {

            
            text_response: this.state.response,
            summary_id: this.props.location.state.summaryId

        })
        .then((res => {
            this.props.history.push({
                pathname: "/solutions4", 
                state: {

                    summary_id: this.props.location.state.summaryId

                    }
            });
          }
    ))

        
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
        console.log('elle est là mon id soummary', this.props.location.state.summaryId)
        const addActions = this.props.location.state.addActions
        const {icon , text_static ,text_static2 } = this.state
        // console.log('cest quoi ce truc', addActions);
        
addActions.map((currElement, index) => {
  console.log("The current iteration is: " + index);
  console.log("The current element is: " + currElement);
  console.log("\n");
  return 'X';
});
        
const array= (event) =>{
    console.log('tu es là array?', Array.from(array).indexOf(event.target) );
  }


return (

            <div className="solution3_width_height">
            <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
            <HeadingText text_static={text_static.all_text} />
            {/* <AnswerAction /> */}
                
                    {addActions.map((addAction, index) => 

                        <div>
                            <p>{addAction}<button key={index} onClick={()=> this.handleClick(addAction)}>Valider</button></p>
                        </div>
                    )}

            <BackAction text_static2={text_static2.all_text}/>
            </div>
            
        )
        
        
    }
}


export default withRouter(Solution3);