import React from 'react'
import "./Task.css"


const Task = ({taskList}) => {
  return (
    <>
     {taskList.map((curElem) => {

          return (
            <>
              <div  key={id}>
              <h2> {curElem.task} </h2>
              <p>{curElem.description}</p>
              </div>
            </>
          );
        })}
    </>
  )
}

export default Task