import React from "react";

const ButtonGroups = props => {
  

  const [isSelected, answered, isCorrect, fixedAnswers, index, id] = [props.isSelected, props.answered, props.isCorrect, props.fixedAnswers, props.index, props.id]

  const clickHandler = () => {
    // array for storing chosen answer and highlighting pick on click
    // const newChoices = [...props.choices]
    // newChoices.splice(index, 1, fixedAnswers)
    // props.setChoices(newChoices)

    // splice adds weird Array(1), returning empty array i think, at end of array but still works above is cleaner on console??
    props.setChoices(prevState => [
      ...props.choices, prevState.splice(index, 1, fixedAnswers)
    ])
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