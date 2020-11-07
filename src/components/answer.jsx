import React from "react";

export const Answer = (props) => {
  return(
    <div className="answer-list">
      {props.answers.map((value, i) => {
        return(
          <button className="btn-answer" key={i.toString()} onClick={() => props.selectAnswer(value.content, value.nextId)}>
            {value.content}
          </button>
        )
      })}
    </div>
  )
}