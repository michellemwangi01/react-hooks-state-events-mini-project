import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
import Task from './Task';

function TaskList({ tasks,  categorySelected}) {
  let listItems
  const tasksWithIDs = tasks.map(task => ({...task, id:uuidv4()}))
  // const [deleteClicked, setDeleteClicked] = useState(false)
  // const [listItems, setListItems] = useState([tasksWithIDs])
  const [filteredTasks, setfilteredTasks] = useState([tasksWithIDs])

     useEffect(()=>{
      setfilteredTasks((filterMe))
     },[categorySelected,tasks])
    
    const filterMe = categorySelected === "All" ? tasksWithIDs : tasksWithIDs.filter(task => task.category === categorySelected)
      
    console.log(tasksWithIDs);
    console.log(filteredTasks);

    listItems = filteredTasks.map((task) => (
    <Task OnDeleteTaskItem={OnDeleteTaskItem} category={task.category} text={task.text} task={task} key={task.id}>{task.text}</Task>  ))


     
  

  function OnDeleteTaskItem (deleteTaskItemID) {
    // console.log(deleteTaskItemID);
    // setDeleteClicked(true)
    setfilteredTasks(filteredTasks.filter(task => task.id !== deleteTaskItemID))
    console.log(listItems);
    
   }

  return (
    <div className="tasks">
      <ul>
        {
        listItems
        }
        
      </ul>
    </div>
  );
}

export default TaskList;


