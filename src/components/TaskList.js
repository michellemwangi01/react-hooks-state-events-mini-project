import React from "react";
import Task from './Task';
import NewTaskForm from "./NewTaskForm";

function TaskList({ tasks, categories, categorySelected }) {
  
  console.log(tasks);
  const filteredTasks = categorySelected === "All" ?tasks: tasks.filter(task => task.category === categorySelected);

  function getMeTheForm (myObject){
      console.log(myObject);
      //tasks.push(myObject)
    }

  const listItems = filteredTasks.map((task, index) => (
    <Task task={task} key={index}>{task.text}</Task>
  ));

 

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <NewTaskForm categories={categories} getMeTheForm={getMeTheForm}/>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default TaskList;
