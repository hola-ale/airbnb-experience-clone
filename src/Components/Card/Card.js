import React from "react";
import "./Card.css"
import star from "../../images/star.png"

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            { badgeText && <div className="card--badge">{ badgeText }</div> }
            <img src={ require(`../../images/${props.coverImg}`).default } alt="" className="card--img"/>
            <div className="card--info">
                <div className="card--info--rating">
                    <img src={ star } alt="" />
                    <p>{props.stats.rating}</p>
                    <p className="grey"> ({props.stats.reviewCount})</p>
                    <p className="grey">•{props.location}</p>
                </div>
                <p className="card--info--description">{props.title}</p>
                <p className="card--info--price"><strong>From {props.price} </strong>/ person</p>
            </div>
        </div>
    )
}
