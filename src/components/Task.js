import React from "react";

function Task({task}) {
  const deleteTaskHandler = ()=>{
    
  }
  return (
    <div className="task">
      <div className="label">{task.text}</div>
      <div className="text">{task.category}</div>
      <button onClick={deleteTaskHandler} className="delete">X</button>
    </div>
  );
}

export default Task;
