import React from 'react'

export default function LandingPage(props) {

  

  return (
    <div className="content">
      <h1>Quizzical</h1>
      <p> Test your knowledge! When you start the quiz, you will have to answer 5 random questions. Good luck!</p>
      <button className="quizzical-button" onClick={props.onStart}> Start quiz!</button>
    </div>
  )
}