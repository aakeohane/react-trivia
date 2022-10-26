import React from "react";

const ButtonGroups = props => {
  

  const [isSelected, answered, isCorrect, fixedAnswers, index, id, choices, setChoices] = [props.isSelected, props.answered, props.isCorrect, props.fixedAnswers, props.index, props.id, props.choices, props.setChoices]

  const clickHandler = () => {
    // array for storing chosen answer and highlighting pick on click
    const newChoices = [...choices]
    newChoices.splice(index, 1, fixedAnswers)
    setChoices(newChoices)

    // this method below adds weird Array(1), returning empty array, at end of array but still works, however the additional arrays
    // cayse glitch effecting total count function for questions when clicking mutiple times.

    // props.setChoices(prevState => [
    //   ...prevState, prevState.splice(index, 1, fixedAnswers)
    // ])
  }

    return (
      <button
          className={`answers-btn 
          ${isSelected && 'blue'}
          ${answered && 'faded'}
          ${isSelected && answered && 'green'}
          ${answered && isCorrect && 'green'} 
          ${isSelected && answered && !isCorrect && 'red'}
          `}
          onClick={() => clickHandler()}
          disabled={answered ? true : false}
          key={id} >
        {fixedAnswers}
      </button>
    )
}

export default ButtonGroups