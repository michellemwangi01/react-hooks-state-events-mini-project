import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
import Task from './Task';

function TaskList({ tasks,  categorySelected}) {
  const [tasksWithIDs, setTasksWithIDs] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(()=>{
    const tasksWithIds = tasks.map((task) => ({ ...task, id: uuidv4() }));
    setTasksWithIDs(tasksWithIds)
    console.log(tasksWithIDs);  
    setFilteredTasks(categorySelected === "All" ? tasksWithIds : tasksWithIds.filter(task => task.category === categorySelected))
    
  },[])
  
  const listItems = filteredTasks.map((task) => (
    <Task OnDeleteTaskItem={OnDeleteTaskItem} task={task} key={task.id}>{task.text}</Task>
  ));

  function OnDeleteTaskItem (deleteTaskItemID) {
    console.log(deleteTaskItemID);
    setFilteredTasks( filteredTasks.filter(task => task.id !== deleteTaskItemID))
    // const remaningTasks =
    console.log(filteredTasks);
    
   }

  return (
    <div className="tasks">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default TaskList;
