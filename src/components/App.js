import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS)
  // const [taskDeleteID, setTaskDeleteID] = useState('')
  
  const onTaskFormSubmit = 
  (newTaskItem) => {
    console.log(newTaskItem);
    setTasks([...tasks, newTaskItem])
   }
 

  //  function onDeleteTaskItem (deleteTaskItemID) {
  //   console.log(deleteTaskItemID);
  //   // const remaningTasks = tasks.filter(task => task.id !== deleteTaskItemID)
  //   // console.log(remaningTasks);
  //   setTasks(tasks.filter((task) => task.id !== deleteTaskItemID));
  //  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* {categoryItems} */}
      <NewTaskForm 
        onTaskFormSubmit={onTaskFormSubmit}  
        tasks={tasks} 
        categories ={CATEGORIES} />
        
      <CategoryFilter 
        tasks={tasks} 
        categories ={CATEGORIES} />
    </div>
  );
}

export default App;
 //  function getTaskDeleteID(taskDeleteID) {
  //   setTaskDeleteID(taskDeleteID)
  //  }