import React from "react";
import CardHead from "./CardHead";
import TextCard from "./TextCard";
import FooterCard from "./FooterCard";
import "../css/CorpsCard.css"

class CorpsCard extends React.Component{
    render(){
        return(
            <div id="CorpsCard">
                <CardHead/>
                <TextCard/>
                <FooterCard/>
            </div>
        )
    }
}

export default CorpsCard