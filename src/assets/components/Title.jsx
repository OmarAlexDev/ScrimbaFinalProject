import React from "react";

export default function Title(props){
    return(
        <div className="title">
            <h1>Quizzical</h1>
            <p>¿Are you ready?</p>
            <button onClick={()=>props.handleClick()}>Start quiz</button>
        </div>
    )
}