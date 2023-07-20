import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const onTaskFormSubmit = (newTaskItem) =>{
    console.log(newTaskItem);
    setTasks([...tasks, newTaskItem])
   }

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* {categoryItems} */}
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit}  tasks={tasks} categories ={CATEGORIES} />
      <CategoryFilter tasks={tasks} categories ={CATEGORIES} />
    </div>
  );
}

export default App;
