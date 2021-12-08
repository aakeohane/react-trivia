import React from "react";

const ButtonThree = props => {

   const clickHandlerOne = () => {
      props.setButtonGroupThree(props.id)
      const newChoices = [...props.choices]
      newChoices.splice(2,1, props.fixedAnswers)
      props.setChoices(newChoices)
   }

     return (
        <button
           className={`answers-btn 
           ${props.activeThree && 'blue'}
           ${props.answered && 'faded'}
           ${props.activeThree && props.answered && 'green'}
           ${props.answered && props.isCorrect && 'green'} 
           ${props.activeThree && props.answered && !props.isCorrect && 'red'}
           `}
           onClick={() => clickHandlerOne()}
           disabled={props.answered ? true : false} >
          {props.fixedAnswers}
        </button>
     )

}

export default ButtonThree