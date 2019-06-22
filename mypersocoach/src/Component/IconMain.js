import React , { Component } from 'react'
import Heading from './Heading'




class IconMain extends Component {

    state={
        icon : [],
        
    }


    getHeader = () => {
        fetch('http://localhost:3004/icon/27')
            .then(res => res.json())
            .then(data => {
                this.setState({ icon : data[0] })
            })
       
        }
    

    componentDidMount(){
        this.getHeader()
    }

    render(){
        const result = this.state.icon

        return(
            <div className="header_mainProb">
                <img src={result.picture_src}/>
            </div>
        )
    }

}


export default IconMain
