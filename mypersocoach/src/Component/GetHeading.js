import React , { Component } from 'react'
import Heading from './Heading'




class GetHeading extends Component {

    state={
        header : [],
        text: []
    }


    getHeader = () => {
        fetch('http://localhost:3001/icon/1')
            .then(res => res.json())
            .then(data => {
                this.setState({ header : data })
            })
        fetch('http://localhost:3001/text_static/1')
            .then(res => res.json())
            .then(data => {
                this.setState({text : data})       
             })

        }
    

    componentDidMount(){
        this.getHeader()
    }

    render(){
        const result = this.state.header.concat(this.state.text)
        return(
            <div>
                <Heading headers ={result}/>
            </div>
        )
    }

}


export default GetHeading