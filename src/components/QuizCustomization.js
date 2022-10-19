import React, { useState } from "react"
import customizeIcon from '../img/slider-icon.png'

export default function QuizCustomization(props) {
  // this is the important property to transfer data from child to parent to access custom options
  const [addCustomCategories] = [props.addCustomCategories]

  const [visible, isVisible] = useState(false)
  const [changed, isChanged] = useState(false)

  const [customization, setCustomization] = useState({
    difficulty: '',
    category: '',
    number: '5'
  })

  const handleChange = (event) => {
    setCustomization({...customization, [event.target.id]: event.target.value})
  }

  const generateCustomQuizData = (event) => {
    event.preventDefault()
    addCustomCategories(customization)
  }

  const customizeQuiz = () => {
    isVisible(prevState => !prevState)
    isChanged(prevState => !prevState)
  }

  return (
    <div>
      <div className={changed ? "customize-container change" : "customize-container"}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </div>
      <img src={customizeIcon} alt="customize icon" className={changed ? "custom-quizzical change" : "custom-quizzical"} onClick={() => customizeQuiz()} />
      <form className={visible ? 'quiz-menu active' : 'quiz-menu'}>
        <label htmlFor="difficulty">Select Difficulty:</label>
        <select
          id='difficulty'
          className="input-box" 
          value={customization.difficulty}
          onChange={handleChange}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          className="input-box" 
          value={customization.category}
          onChange={handleChange}
        >
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="17">Science & Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="31">Japanese Anime & Manga</option>
        </select>
        <label htmlFor="number">Number of Questions:</label>
        <input
          type="number"
          id="number"
          className="input-box" 
          value={customization.number}
          onChange={handleChange}
          min="5"
          max="10"
        />
        <button className="submit-button" type="submit" onClick={generateCustomQuizData}>Submit</button>
      </form>

    </div>
  )
}