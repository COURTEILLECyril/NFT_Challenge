import React, { Fragment } from "react";
import "../css/TextCard.css"
import ethereum from "../images/icon-ethereum.svg"
import clock from "../images/icon-clock.svg"


class TextCard extends React.Component{

    render() {
        return(
            <Fragment>
                <h3>Equilibrium #3429</h3>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <div className="prixAndTime">
                    <div className="prix">
                        <img src={ethereum} alt="" />
                        <p>0.041 ETH</p>
                    </div>
                    <div className="time">
                        <img src={clock} alt="" />
                        <p>3 days left</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TextCard