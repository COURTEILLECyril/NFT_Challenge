import React, { Fragment } from "react"
import equilibrium from "../images/image-equilibrium.jpg"
import view from "../images/icon-view.svg"
import "../css/CardHead.css"

class CardHead extends React.Component{
  
    render() {
        return(
            <Fragment>
                <div className="test">
                    <div className="invisible">
                        <img id="view" src={view} alt="" />
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default CardHead