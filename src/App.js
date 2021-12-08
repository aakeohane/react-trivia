import { useState } from 'react'
import { useEffect } from 'react'
import LandingPage from './components/LandingPage'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/ButtonTwo'
import ButtonThree from './components/ButtonThree'
import ButtonFour from './components/ButtonFour'
import ButtonFive from './components/ButtonFive'
import { nanoid } from 'nanoid'

function App() {

  // if button is clicked change color, remove color and add
  // color if another button is clicked
  //  I struggled with this part of the code and could not find a solution without creating
  // separate components and state for each group of answers
  const [buttonGroupOne, setButtonGroupOne] = useState(0)
  const [buttonGroupTwo, setButtonGroupTwo] = useState(0)
  const [buttonGroupThreee, setButtonGroupThree] = useState(0)
  const [buttonGroupFour, setButtonGroupFour] = useState(0)
  const [buttonGroupFive, setButtonGroupFive] = useState(0)
  
  const [buttonArray, setButtonArray] = useState([])

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState([])
  
  // this initial array needs to have five blank string so they can be replaced by users quiz choices
  const initialChoicesArray = ['', '', '', '', '']
  
  const [message, setMessage] = useState(false)
  const[count, setCount] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [choices, setChoices] = useState(initialChoicesArray)

  const [answered, setAnswered] = useState(false)
  console.log(answered)
  console.log(quizData)
  
  useEffect(() => {
    if (!quiz) {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuizData(data.results))
    }
  }, [quiz])

  
  const startQuiz = () => {
    setQuiz(true)
  }

  useEffect(() => {
    const bigArray = []
    const correctAnswerArray = []
    quizData.map((item, index) => {
      const correctAnswers = item.correct_answer
      correctAnswerArray.push(correctAnswers)
      setCorrectAnswers(correctAnswerArray)
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

  const checkAnswers = (correctAnswers, choices) => {
    setCount(0)
    if (choices.includes('')) {
      setMessage(true)
    }
    for (let i = 0; i < correctAnswers.length; i++){
      if (correctAnswers[i] === choices[i]) {
        setCount(prevState => prevState +1)
      } else if (!choices.includes('')) {
        setAnswered(true)
        setMessage(false)
      }
    }
  }

  // Fisher-Yates Shuffle Algorithm
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const quizQuestions = buttonArray.map(item => {
    const unicodeQ = item.question
    const questions = unicodeQ.replace(/&quot;/g,'"').replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&rsquo;/g, "").replace(/&oacute;/g,'Ó').replace(/&uacute;/g, 'ú')
    const answerButtons = item.answers.map(item => {
      const unicodeA = item.name
      const fixedAnswers = unicodeA.replace(/&quot;/g,'"').replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&oacute;/g,'Ó').replace(/&uacute;/g, 'ú')
      
      if (item.index === 0) {
        return (
          <ButtonOne
            fixedAnswers={fixedAnswers}
            id={item.id}
            key={item.id}
            index={item.index}
            isCorrect={item.isCorrect}
            answered={answered}
            choices={choices}
            setChoices={setChoices}
            setButtonGroupOne={setButtonGroupOne}
            activeOne={buttonGroupOne === item.id ? true : false} />
        )
      }
      if (item.index === 1)
        return  (
          <ButtonTwo
            fixedAnswers={fixedAnswers}
            id={item.id}
            key={item.id}
            index={item.index}
            isCorrect={item.isCorrect}
            choices={choices}
            answered={answered}
            setChoices={setChoices}
            setButtonGroupTwo={setButtonGroupTwo}
            activeTwo={buttonGroupTwo === item.id ? true : false} />
        )
      if (item.index === 2)
        return  (
          <ButtonThree
            fixedAnswers={fixedAnswers}
            id={item.id}
            key={item.id}
            index={item.index}
            isCorrect={item.isCorrect}
            choices={choices}
            setChoices={setChoices}
            answered={answered}
            setButtonGroupThree={setButtonGroupThree}
            activeThree={buttonGroupThreee === item.id ? true : false} />
        )
      if (item.index === 3)
        return  (
          <ButtonFour
            fixedAnswers={fixedAnswers}
            id={item.id}
            index={item.index}
            key={item.id}
            isCorrect={item.isCorrect}
            choices={choices}
            setChoices={setChoices}
            answered={answered}
            setButtonGroupFour={setButtonGroupFour}
            activeFour={buttonGroupFour === item.id ? true : false} />
        )
      else if (item.index === 4)
        return  (
          <ButtonFive
            fixedAnswers={fixedAnswers}
            id={item.id}
            key={item.id}
            index={item.index}
            isCorrect={item.isCorrect}
            choices={choices}
            setChoices={setChoices}
            answered={answered}
            setButtonGroupFive={setButtonGroupFive}
            activeFive={buttonGroupFive === item.id ? true : false} />
        )
    })
      return (
        
        <div className="question-group">
          <p className="question">{questions}</p>
          <div className="button-container">{answerButtons}</div>
        </div>
      )
  })

  const resetGame = () => {
    setQuiz(false)
    setAnswered(false)
    // modifying state directly, but not sure how else to do this, 
    // have to reset choices state
    setChoices(initialChoicesArray)
  }
  console.log(choices)

  return (
    <div className="App">
      <div className="landing-container">
        <div className="yellow-blob"></div>
        <div className="blue-blob"></div>
        { !quiz && <LandingPage onStart={() => startQuiz()} />}
        <div className="quiz-container">
          { quiz && quizQuestions}
          { message && <p className="message">You must answer all questions!</p> }
          { quiz && !answered && 
            <button className="quizzical-button" 
              onClick={() => checkAnswers(correctAnswers, choices)}>Check answers
            </button>}
          { answered && 
            <div className="play-again-container">
              <p>You scored {count}/5 correct answers</p>
              <button className="quizzical-button"
                onClick={() => resetGame()}>Play again
              </button>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default App
