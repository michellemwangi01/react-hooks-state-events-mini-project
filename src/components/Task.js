import React from "react";

function Task({task, text,category, OnDeleteTaskItem}) {

  const onDeleteHandler = ()=>{
    console.log(task.id);
    OnDeleteTaskItem(task.id)
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button 
        key={task.id} 
        onClick={onDeleteHandler} 
        className="delete">X</button>
    </div>
  );
}

export default Task;
