import React from "react";

const ButtonFour = props => {

   const clickHandlerOne = () => {
      props.setButtonGroupFour(props.id)
      const newChoices = [...props.choices]
      newChoices.splice(3,1, props.fixedAnswers)
      props.setChoices(newChoices)
   }

     return (
        <button
           className={`answers-btn 
           ${props.activeFour && 'blue'}
           ${props.answered && 'faded'}
           ${props.activeFour && props.answered && 'green'}
           ${props.answered && props.isCorrect && 'green'} 
           ${props.activeFour && props.answered && !props.isCorrect && 'red'}
           `}
           onClick={() => clickHandlerOne()}
           disabled={props.answered ? true : false} >
          {props.fixedAnswers}
        </button>
     )

}

export default ButtonFour