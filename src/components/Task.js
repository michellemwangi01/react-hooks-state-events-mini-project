import React from "react";

function Task({task, OnDeleteTaskItem}) {

  const onDeleteHandler = ()=>{
    console.log(task.id);
    OnDeleteTaskItem(task.id)
  }

  return (
    <div className="task">
      <div className="label">{task.text}</div>
      <div className="text">{task.category}</div>
      <button 
        key={task.id} 
        onClick={onDeleteHandler} 
        className="delete">X</button>
    </div>
  );
}

export default Task;
