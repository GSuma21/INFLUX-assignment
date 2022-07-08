import React from 'react'



const Task = ({taskList}) => {
  return (
    <>
     {menuData.map((curElem) => {

          return (
            <>
              <div  key={curElem.id}>
              <h2> {curElem.task} </h2>
              </div>
            </>
          );
        })}
    </>
  )
}

export default Task