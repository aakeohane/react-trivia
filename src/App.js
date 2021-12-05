import LandingPage from './components/LandingPage'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuizData(data.results))
  }, [])
  
  const startQuiz = () => {
    setQuiz(true)
  }

  // Fisher-Yates Shuffle Algorithm
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const quizQuestions = quizData.map(item => {
    // had to remove some of the JSON symbols since API kept them in data
    const unicodeQ = item.question
    const questions = unicodeQ.replace(/&quot;/g,'"').replace(/&#039;/g, "'").replace(/&amp;/g, "&")

    const wrongAnswers = item.incorrect_answers
    wrongAnswers.push(item.correct_answer)
    console.log(item.correct_answer)
    const answersArray = [...new Set(wrongAnswers)]
    shuffle(answersArray)
    const answers = answersArray.map(item => {
        const unicodeA = item
        const fixedAnswers = unicodeA.replace(/&quot;/g,'"').replace(/&#039;/g, "'").replace(/&amp;/g, "&")
        return <li className="answers">{fixedAnswers}</li>
      })

    return (
      <div>
        <p>{questions}</p>
        <ul>{answers}</ul>
      </div>
      
    )
  })

  return (
    <div className="App">
      <div className="landing-container">
        <div className="yellow-blob"></div>
        <div className="blue-blob"></div>
        { !quiz && <LandingPage onStart={() => startQuiz()} />}
        <div className="question-container">
          { quiz && quizQuestions}
        </div>
      </div>
    </div>
  );
}

export default App
