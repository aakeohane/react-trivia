import React from "react";

const ButtonOne = props => {

   const clickHandlerOne = () => {
      props.setButtonGroupTwo(props.id)
      const newChoices = [...props.choices]
      newChoices.splice(1,1, props.fixedAnswers)
      props.setChoices(newChoices)
   }

     return (
        <button
           className={`answers-btn 
           ${props.activeTwo && 'blue'}
           ${props.answered && 'faded'}
           ${props.activeTwo && props.answered && 'green'}
           ${props.answered && props.isCorrect && 'green'} 
           ${props.activeTwo && props.answered && !props.isCorrect && 'red'}
           `}
           onClick={() => clickHandlerOne()}
           disabled={props.answered ? true : false} >
          {props.fixedAnswers}
        </button>
     )

}

export default ButtonOne