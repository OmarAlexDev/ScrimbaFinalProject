import React from "react"
import blueBlob from './assets/images/blue_Blob.png'
import yellowBlob from './assets/images/yellow_Blob.png'
import Title from "./assets/components/Title"
import Trivia from "./assets/components/Trivia"

export default function App() {

  const [initQuiz, setInitQuiz] = React.useState(true)

  function activateQuiz(){
    setInitQuiz(prevInitQuiz=>!prevInitQuiz)
  }

  function resetQuiz(){
    setInitQuiz(prevInitQuiz=>!prevInitQuiz)
  }

  return (
    <div className='App'>
      <img className="blueBlob-img" src={blueBlob}></img>
      <img className="yellowBlob-img" src={yellowBlob}></img>
      {initQuiz && <Title handleClick={activateQuiz}/>}
      {!initQuiz && <Trivia handleClick={resetQuiz}/>}
    </div>
  )
}
