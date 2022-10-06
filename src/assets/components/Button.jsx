import React from "react";

export default function Button(props){

    const styles = {
        backgroundColor: props.selected ? "#D6DBF5" : "transparent"
    }
    
    return(
        <button className="question-button" style={styles} onClick={()=>props.handleClick(props.id)}>
            {props.text}
        </button>
    )
}