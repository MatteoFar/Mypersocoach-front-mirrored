import React from "react";
import axios from "axios";

import "../Screen/Symptome3.css";

//import {ButtonToolbar,Button } from 'reactstrap';

import IconMain from "../Component/IconMain";
import HeadingText from "../Component/HeadingText";
import Symptomes from "../Component/Symptomes";


class Symptome3 extends React.Component {
  
  state = {
    icon: [],
    text_static: [],
    problem: [],
    id : null,
    lastId: ""
  };
  
  getHeader = async () => {
    const res = await axios.get("http://localhost:3001/icon/27");
    this.setState({ icon: res.data[0] });
  };

  getTextStatic = async () => {
    const res = await axios.get("http://localhost:3001/text_static/4");
    this.setState({ text_static: res.data[0] });
  };

  getThematic = async () => {
    //Ici, on cible toutes les icônes (il y a map), donc on ne précise pas d'id précis
    const res = await axios.get("http://localhost:3001/problem/");
    //Comme on ne précise pas d'id précis, on ne met pas de [0] à la suite de "res.data"
    this.setState({ problem: res.data });
  };
  


  loadSummaryId = () => {
    const {id} = this.state
     axios.post(`http://localhost:3001/summary`, {id: id})
      .then(res => {
        console.log("response axios: symp3", res);
        const lastId = res.data.summaryId
        this.setState({ lastId : lastId})
       
      })
   }

   
  
  componentDidMount() {
    this.getHeader();
    this.getTextStatic();
    this.getThematic();
    this.loadSummaryId()
  }
  
  render() {
    const { icon, text_static, problem, lastId } = this.state;
  
    
    //display of problem array where we see id=1 conflit avec un collègue, id=2 maperformance etc...
    //we need this id in the next component :Symptomes in order to set conditions to access the 6 Symto4 components

    return (
      <div className="containerSymptom3">
        <IconMain icon={icon.picture_src} alt={icon.description_alt}/>
        <HeadingText text_static={text_static.all_text} />
        <div className="flex">
        {problem.map(problem => (
          <Symptomes lastId={lastId} mainThemeID={this.props.mainThemeId}  problem={problem} />
        ))}

        </div>
        {/* <ForwardAnnex /> */}
      </div>
    );
  }

}
export default Symptome3;
