import React from "react";

const Button = props => {

  const indexNumber = (position) => {
    switch(position) {
      case (1):
        return 'one'
      case (2):
        return 'two'
      default:
        return ''
    }
  }

   const clickHandler = () => {
      props.setChosenAnswer(props.id)
   }
   return (
      <button
         className={`answers-btn ${indexNumber(props.index)} ${props.active ? 'blue' : null}`}
         onClick={() => clickHandler()} >

        {props.fixedAnswers}

      </button>
   )

}

export default Button