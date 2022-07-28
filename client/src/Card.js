import './index.css'
import React from "react";

const Card = (props)=>{
    return (
        <>
            <div className="outerBody">
                <div className="name">
                    {props.name} 
                    <span>{props.flag}</span>
                </div>
                <div className="region">
                    <span>{props.region}</span>
                    <span>{props.area}</span>
                </div>
                <div className="heading">Currency</div>
                <div className="currency">
                    {Object.keys(props.currency).toString()}
                </div>
                <div className="heading">Languages</div>
                <div className="language">
                    {Object.values(props.language).toString()}
                </div>
            </div>
        </>
    )
}

export default Card;