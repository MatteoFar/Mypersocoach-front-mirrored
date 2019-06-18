import React , { Component } from 'react'
import Heading from './Heading'




class IconMain extends Component {

    state={
        icon : [],
        
    }


    getHeader = () => {
        fetch('http://localhost:3003/icon/27')
            .then(res => res.json())
            .then(data => {
                this.setState({ icon : data })
            })
       
        }
    

    componentDidMount(){
        this.getHeader()
    }

    render(){
        const result = this.state.icon

        return(
            <div>
                <Heading headers ={result}/>
            </div>
        )
    }

}


export default IconMain