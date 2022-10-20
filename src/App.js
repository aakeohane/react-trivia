import { useState } from 'react'
import { useEffect } from 'react'
import LandingPage from './components/LandingPage'
import ButtonGroups from './components/ButtonGroups'
import { nanoid } from 'nanoid'
import QuizCustomization from './components/QuizCustomization'

function App() {
  // I may add categories and more options for future iterations

  const initialChoicesArray = ['','','','','']
  const initialButtonGroupArray = ['','','','','']
  const initialOptionsArray = {
    difficulty: '',
    category: '',
    number: '5'
  }
  
  //  I struggled with this part of the code and could not find a solution without creating
  // separate components and state for each group of answers until I learned how to manipulate
  // the arrays based on index similar to choices array. May also add each as a property to further consolidate state
  // if button is clicked change color, remove color and add
  // color if another button is clicked
  const [buttonGroup, setButtonGroup] = useState(initialButtonGroupArray)
  
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

  const fetchData = () => {
    // this works for now, but still should destructure object properly when changing options
    const optionsArray = Object.values(options)
    const number = `${optionsArray[2]}`
    const category = `&category=${optionsArray[1]}`
    const difficulty = `&difficulty=${optionsArray[0]}`

    const dynamicUrl = [number, category, difficulty].filter(Boolean).join('')
    const url = `https://opentdb.com/api.php?amount=${dynamicUrl}`
    
    fetch(url)
      .then(res => res.json())
      .then(data => setQuizData(data.results))
  }

  useEffect(() => {
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
        setButtonGroup(newBlankArray)
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [customQuizData])

  const startQuiz = () => {
    setQuiz(true)
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
            buttonGroup={buttonGroup}
            setButtonGroup={setButtonGroup}
            isSelected={buttonGroup[item.index] === item.id ? true : false} />
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
    fetchData()
    setButtonGroup(initialButtonGroupArray)
    setChoices(initialChoicesArray)
    setOptions(initialOptionsArray)
  }

  return (
    <div className="App">
      <div className="landing-container">
        { quiz ? null : <QuizCustomization
          addCustomCategories={addCustomCategories}
        /> }
        <div className="yellow-blob"></div>
        <div className="blue-blob"></div>
        { !quiz && <LandingPage options={options} onStart={() => startQuiz()} />}
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
            </div>}
        </div>
      </div>
    </div>
  );
}

export default App