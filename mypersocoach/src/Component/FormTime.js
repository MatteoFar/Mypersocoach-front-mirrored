import React from "react";
import axios from "axios";
import { withRouter} from "react-router-dom";

import './FormTime.css';

class FormTime extends React.Component {

    

    state = {
        
        text_static3: [],
       
        summaryId: this.props.summaryId,
        problem_origin_id: this.props.problem_originId,
        date:''
    }

    handleChangeDate = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { date } = this.state;
        // allows us to go the symptome 2 page thanks to history.push and tranfert lastId recap as props
        // first condition 
        console.log('a quoi ressemble la date', date)
        const id = this.props.summaryId
        console.log('pouet pouet summaryid', this.props.summaryId)
            
        //     if (this.props.backSubmit = "backSubmit") {
        //         axios.put(`http://localhost:3001/action/backSubmit/${id}`, {

        //     date: date
        //     // response_summary: this.state.textarea,
        //     // summary_id: this.props.summaryId,
        //     // problem_id: this.props.problemId,
        //     // problem_origin_id: 1

        // })
        // .then((res => {
            
        //     console.log("summary id es tu toujours là mercI", this.state.summaryId)
            
        //     this.props.history.push({
        //         pathname: "/Saut1", 
        //         state: {

        //             summaryId: this.state.summaryId

        //             }
        //     });
        //   }
        // ))

        //     }

        // else {
            axios.put(`http://localhost:3001/action/${id}`, {

            date: date
            // response_summary: this.state.textarea,
            // summary_id: this.props.summaryId,
            // problem_id: this.props.problemId,
            // problem_origin_id: 1

        })
        .then((res => {
            
            console.log("summary id es tu toujours là mercI", this.state.summaryId)
            
            this.props.history.push({
                pathname: "/Saut1", 
                state: {

                    summaryId: this.state.summaryId

                    }
            });
          }
        ))
    // }    
    
    }
       
         

    getValidate = async () => {
        const res = await axios.get("http://localhost:3001/text_static/116")
        this.setState({ text_static3: res.data[0] });
    };



    // index.js:1375 Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

    


    componentDidMount() {
        
        this.getValidate();
        
        
    }

    
    render() {

        const {text_static3 } = this.state

    // console.log("est ce que summary-id se charge", this.state.summary_id)
    // console.log('est ce que ma props se charge', this.props.lastId)


     

            return (
                
                <div>
                    <form id="form" method="post" action="#" onSubmit={this.handleSubmit} >
                        
    
                        <input type="date" id="date" name="date" onChange={this.handleChangeDate} > 
                            
                        </input>


                        {/* valider button */}
                        <button id="valid" href="#" className="button_validate" type="submit" name="valid" >{text_static3.all_text}</button >


                        {/* "Je n'en suis pas sûr" button */}
                        {/* <div className="navlink" >
                            <button href="#" className="button_back" type="reset" name="return" onClick={this.handleClick} >{text_static5.all_text} </button>
                    </div> */}
    
                    </form>
                  
                </div>
            )  

        



    }
}

export default withRouter(FormTime);