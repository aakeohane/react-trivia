import React from "react";

const ButtonFive = props => {

  const clickHandler = () => {
    props.setButtonGroupFive(props.id)
    const newChoices = [...props.choices]
    newChoices.splice(4,1, props.fixedAnswers)
    props.setChoices(newChoices)

   }

     return (
        <button
           className={`answers-btn 
           ${props.activeFive && 'blue'}
           ${props.answered && 'faded'}
           ${props.activeFive && props.answered && 'green'}
           ${props.answered && props.isCorrect && 'green'} 
           ${props.activeFive && props.answered && !props.isCorrect && 'red'}
           `}
           onClick={() => clickHandler()}
           disabled={props.answered ? true : false} >
          {props.fixedAnswers}
        </button>
     )

}

export default ButtonFive