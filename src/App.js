import LandingPage from './components/LandingPage'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from './Button'
import { nanoid } from 'nanoid'

function App() {

  // if button is clicked change color, remove color and add
  // color is another button is clicked
  const [chosenAnswer, setChosenAnswer] = useState(0)
  

  const [buttonArray, setButtonArray] = useState([])


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

  useEffect(() => {
    const bigArray = []
    quizData.map((item, index) => {
      const wrongAnswers = item.incorrect_answers
      const wrongAnswersArray = wrongAnswers.map(item => {
        return {
          name: item,
          isCorrect: false,
          id: nanoid(),
          index: index
        }
      })
      const correctAnswer = {
        name: item.correct_answer,
        isCorrect: true,
        id: nanoid(),
        index: index
      }
      wrongAnswersArray.push(correctAnswer)
      
      shuffle(wrongAnswersArray)
      const questionObject = {
        question: item.question,
        answers: wrongAnswersArray
      }
      return bigArray.push(questionObject)
      
    })
    setButtonArray(bigArray)
      
  }, [quizData])

  console.log(buttonArray)

  // Fisher-Yates Shuffle Algorithm
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


    const quizQuestions = buttonArray.map(item => {
        const unicodeQ = item.question
        const questions = unicodeQ.replace(/&quot;/g,'"').replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&rsquo;/g, "'")
        const answerButtons = item.answers.map(item => {
          const unicodeA = item.name
          const fixedAnswers = unicodeA.replace(/&quot;/g,'"').replace(/&#039;/g, "'").replace(/&amp;/g, "&")
          return (
              <Button
                fixedAnswers={fixedAnswers}
                id={item.id}
                index={item.index}
                setChosenAnswer={setChosenAnswer}
                active={chosenAnswer === item.id ? true : false} />
          )
        })
        return (
          <div className="question-group">
          <p className="question">{questions}</p>
          <div className="button-container">{answerButtons}</div>
        </div>
        )
      })
      

  return (
    <div className="App">
      <div className="landing-container">
        <div className="yellow-blob"></div>
        <div className="blue-blob"></div>
        { !quiz && <LandingPage onStart={() => startQuiz()} />}
        <div className="quiz-container">
          { quiz && quizQuestions}
          { quiz && <button className="quizzical-button">Check answers</button>}
        </div>
      </div>
    </div>
  );
}

export default App
