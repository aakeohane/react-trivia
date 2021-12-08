import React from "react";

const ButtonOne = props => {

   const clickHandlerOne = () => {
      props.setButtonGroupOne({...props.buttonGroupOne, isActive: props.id, isPicked: !props.isPicked})
      const newChoices = [...props.choices]
      newChoices.splice(0,1, props.fixedAnswers)
      props.setChoices(newChoices)
   }
   

   const active = props.activeOne

     return (
        <button
           className={`answers-btn 
           ${active && 'blue'}
           ${props.answered && 'faded'}
           ${active && props.answered && 'green'}
           ${props.answered && props.isCorrect && 'green'} 
           ${active && props.answered && !props.isCorrect && 'red'}
           `}
           onClick={() => clickHandlerOne()}
           disabled={props.answered ? true : false} >
          {props.fixedAnswers}
        </button>
     )

}

export default ButtonOne