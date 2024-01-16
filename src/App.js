import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import ButtonGroups from './components/ButtonGroups'
import { nanoid } from 'nanoid'
import QuizCustomization from './components/QuizCustomization'

import BeatLoader from "react-spinners/BeatLoader";


function App() {
  // have to start with five blank strings in initial Choices, these will be filled as user chooses answers 
  // in reference to index position of quiz. I use the blank string as a reference later for whether user has answered
  // all questions in quiz. I wasnt sure a better way to handle this logic.
  const initialChoicesArray = ['','','','','']
  const initialOptionsArray = {
    difficulty: '',
    category: '',
    number: '5'
  }

  const [loading, isLoading] = useState(false)
  
  const [buttonArray, setButtonArray] = useState([])

  const [quiz, setQuiz] = useState(false)
  const [quizData, setQuizData] = useState([])
  
  
  const [message, setMessage] = useState(false)
  const [count, setCount] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [choices, setChoices] = useState(initialChoicesArray)

  const [answered, setAnswered] = useState(false)

  const [customQuizData, updateCustomQuizData] = useState([])
  const [options, setOptions] = useState(initialOptionsArray)

  const [visible, isVisible] = useState(false)

  const fetchData = () => {
    isLoading(true)
    const optionsArray = Object.values(options)
    const number = `${optionsArray[2]}`
    const category = `&category=${optionsArray[1]}`
    const difficulty = `&difficulty=${optionsArray[0]}`
    let newBlankArray = new Array(Number(optionsArray[2])).fill('')
    setChoices(newBlankArray)
    const dynamicUrl = [number, category, difficulty].join('')
    const url = `https://opentdb.com/api.php?amount=${dynamicUrl}`
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setQuizData(data.results)
      })
      .catch((err) => console.error(err))
      .finally(() => {
        isLoading(prevState => !prevState)
      })
  }

  useEffect(() => {
    isLoading(true)
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])

  useEffect(() => {
      const optionsArray = []
      Object.values(customQuizData).forEach(val => {
        const [ difficulty, category, number ] = [val.difficulty, val.category, val.number]
        optionsArray.push(difficulty, category, number)
      })
      if (customQuizData.length !== 0) {
        setOptions(optionsArray)
        let newBlankArray = new Array(Number(optionsArray[2])).fill('')
        setChoices(newBlankArray)
      }
   }, [customQuizData])

  const startQuiz = () => {
    setQuiz(true)
    isVisible(false)
  }

  useEffect(() => {
    const bigArray = []
    const correctAnswerArray = []
    quizData.map((item, index) => {
      const parsedCorrectAnswers = new DOMParser().parseFromString(item.correct_answer, "text/html")
      const correctAnswers = parsedCorrectAnswers.body.firstChild.textContent
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
    for (let i = 0; i < correctAnswers.length; i++){
      if (correctAnswers[i] === choices[i]) {
        setCount(prevState => prevState +1)
      }
    }
    if (choices.includes('')) {
      setMessage(true)
    } else {
      setAnswered(true)
      setMessage(false)
    }
  }

  const addCustomCategories = (customization) => {
    updateCustomQuizData(prevState => ({...prevState, customization}))
  }

  // Fisher-Yates Shuffle Algorithm
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const quizQuestions = buttonArray.map(item => {
    const parsedQuestions = new DOMParser().parseFromString(item.question, "text/html")
    // DOMParser is a nifty function to translate unicode into a document object, so you have to pull the textcontent
    // out using body.firstChild.textContent
    const questions = parsedQuestions.body.firstChild.textContent
    const answerButtons = item.answers.map(item => {
      const parsedAnswers = new DOMParser().parseFromString(item.name, "text/html")
      const answers = parsedAnswers.body.firstChild.textContent
        return (
          <ButtonGroups
            fixedAnswers={answers}
            id={item.id}
            key={item.id}
            index={item.index}
            isCorrect={item.isCorrect}
            answered={answered}
            choices={choices}
            setChoices={setChoices}
            isSelected={choices[item.index] === answers ? true : false} />
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
    fetchData()
    setMessage(false)
  }

  return (
    <div className="App">
      <div className="landing-container">
        <QuizCustomization
          addCustomCategories={addCustomCategories}
          options={options}
          quiz={quiz}
          visible={visible}
          isVisible={isVisible}
          resetGame={resetGame}
        />
        <div className="yellow-blob"></div>
        <div className="blue-blob"></div>
        { !quiz && 
          <LandingPage 
            options={options} 
            onStart={() => startQuiz()}
            isVisible={isVisible}
          />}
          {/* below sets loader while info is being fetched */}
          {(loading && quiz) ? <BeatLoader color={'#ccccff'} size={25} /> :
            <div className="quiz-container">
            { quiz && quizQuestions}
            { message && <p className="message">You must answer all questions!</p> }
            { quiz && !answered && 
              <button className="quizzical-button" 
                onClick={() => checkAnswers(correctAnswers, choices)}>Check answers
              </button>}
            { answered && 
              <div className="play-again-container">
                <p>You scored {count}/{choices.length} correct answers</p>
                <button className="quizzical-button"
                  onClick={() => resetGame()}>Play again
                </button>
              </div> }
            </div> 
          }

      </div>
    </div>
  );
}

export default App