import React from "react";

const ButtonGroups = props => {
  
  const [active, answered, isCorrect, fixedAnswers, index, id] = [props.active, props.answered, props.isCorrect, props.fixedAnswers, props.index, props.id]

  const clickHandler = () => {
    // array for highlighting pick on click for each button group
    const buttonGroup = [...props.buttonGroup]
    buttonGroup.splice(index, 1, id)
    props.setButtonGroup(buttonGroup)

    // array for storing chosen answer
    const newChoices = [...props.choices]
    newChoices.splice(index, 1, fixedAnswers)
    // prevState adds weird Array at end of array but still works above is cleaner
    // props.setChoices(prevState => [
    //   ...props.choices, props.choices.splice(index, 1, fixedAnswers)
    // ])
    props.setChoices(newChoices)
  }

    return (
      <button
          className={`answers-btn 
          ${active && 'blue'}
          ${answered && 'faded'}
          ${active && answered && 'green'}
          ${answered && isCorrect && 'green'} 
          ${active && answered && !isCorrect && 'red'}
          `}
          onClick={() => clickHandler()}
          disabled={answered ? true : false}
          key={id} >
        {fixedAnswers}
      </button>
    )
}

export default ButtonGroups