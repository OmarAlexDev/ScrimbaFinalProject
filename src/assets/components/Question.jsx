import React from "react";
import {nanoid} from "nanoid"
import Button from "./Button";

export default function Question(props){
    const {key,id,category,correctAns,difficulty,incorrectAns,question,type} = {...props}

    const test = "test"

    const [optionPool, setOptionPool] = React.useState(()=>{
        const val = [correctAns]
        incorrectAns.splice(Math.floor(Math.random() * (incorrectAns.length + 1)), 0, val.pop())
        const buttons = []
        incorrectAns.map(ans=>buttons.push(
            {
            key:nanoid(),
            id:nanoid(),
            value:ans,
            selected:false
            }
        ))
        return buttons
    })

    const options = optionPool.map(quest=>
        <Button 
            key={quest.key}
            id={quest.id}
            text={quest.value}
            selected={quest.selected}
            handleClick={selectOption}
        />
    )
    
    function selectOption(optionId){
        setOptionPool(prevPool=>prevPool.map(
            oldProp=>{
                if(oldProp.id===optionId){
                    return {...oldProp,selected:true}
                }
                return {...oldProp,selected:false}
            }
        ))
        props.handleClick(optionPool, id)
    }

    return(
        <div className="question-row">
            <p className="question">{question}</p>
            <div className="questions-container">
                {options}
            </div>
        </div>
    )
}