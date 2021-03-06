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
       
        const id = this.props.summaryId
       
            
      
            axios.put(`http://localhost:3001/action/${id}`, {

            date: date
            

        })
        .then((res => {
            
           
            
            this.props.history.push({
                pathname: "/Saut1", 
                state: {

                    summaryId: this.state.summaryId

                    }
            });
          }
        ))
     
    
    }
       
         

    getValidate = async () => {
        const res = await axios.get("http://localhost:3001/text_static/116")
        this.setState({ text_static3: res.data[0] });
    };



    

    


    componentDidMount() {
        
        this.getValidate();
        
        
    }

    
    render() {

        const {text_static3 } = this.state

  

     

            return (
                
                <div>
                    <form id="form" method="post" action="#" onSubmit={this.handleSubmit} >
                        
    
                        <input type="date" id="date" name="date" onChange={this.handleChangeDate} > 
                            
                        </input>


                        {/* valider button */}
                        <button id="valid" href="#" className="button_validate_time" type="submit" name="valid" >{text_static3.all_text}</button >


                       
    
                    </form>
                  
                </div>
            )  

        



    }
}

export default withRouter(FormTime);