import React from "react";
import Question from "./Question";
import {nanoid} from "nanoid"

export default function Trivia(props){
    const [questionsData, setQuestionsData] = React.useState([])

    const [endGame, setEndGame] = React.useState(true)

    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(retrievedData=>setQuestionsData(retrievedData.results))
    },[])

    function retrieveQuestion(optionPool,questionId){
        console.log(optionPool)
        for(let x=0; x<questions.length;x++){
            if(questions[x].id==questionId){
                console.log(questions[x].props.incorrectAns)
            }
        }
    }

    function checkAnswers(){
        for(let x=0; x<questions.length;x++){
            console.log(questions[x].props)
        }
    }

    const questions = questionsData.map(question=>
        <Question 
            key={nanoid()}
            id={nanoid()}
            category={question.category}
            correctAns={question.correct_answer}
            difficulty={question.difficulty}
            incorrectAns={question.incorrect_answers}
            question={question.question}
            type={question.type}
            handleClick={retrieveQuestion}
        />)

    return(
        <div className="trivia">
            {questions}
            <div className="footer">
            {endGame ? 
                <button className="submit-answers" onClick={checkAnswers}>Check Answers</button> 
                : 
                <>
                    <p>You scored 3/5 correct answers</p>
                    <button className="submit-answers" onClick={props.handleClick}>Play again</button>
                </>
            }
            </div>
        </div>
    )
}