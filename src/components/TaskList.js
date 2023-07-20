import React, { useState } from "react";
import Task from './Task';
import NewTaskForm from "./NewTaskForm";

function TaskList({ tasks, setTasks, categories, categorySelected }) {
  const filteredTasks = categorySelected === "All" ? tasks : tasks.filter(task => task.category === categorySelected);
  //  const [tasks, setTasks] = useState([tasks]);
  // Define the function to update the tasks state
  // const getMeTheForm = (myObject) => {
  //   console.log(myObject);
  //   //setTasks([...tasks, myObject]); // Update the tasks state with the new task
  // };

  const listItems = filteredTasks.map((task, index) => (
    <Task task={task} key={index}>{task.text}</Task>
  ));

  return (
    <div className="tasks">
      <NewTaskForm setTasks={setTasks} tasks={tasks} categories={categories}  />
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default TaskList;
