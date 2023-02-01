import React, { Fragment } from "react";
import "../css/FooterCard.css"
import avatar from "../images/image-avatar.png"

class FooterCard extends React.Component{

    render() {
        return(
            <Fragment>
                <div className="hr"></div>
                <div id="divCrea">
                    <img id="avatar" src={avatar} alt="" />
                    <p>Creation of <span>Jules Wyvern</span></p>
                </div>
            </Fragment>
        )
    }
}

export default FooterCard