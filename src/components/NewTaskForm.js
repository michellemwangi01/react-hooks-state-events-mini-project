import React, { useState } from "react";

function NewTaskForm({ categories,onTaskFormSubmit }) {

  const [newTaskItem, setNewTaskItem] = useState({
    text: "",
    category: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTaskItem)
    setNewTaskItem({
      text: "",
    category: ""
    })
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewTaskItem(({...newTaskItem, [name]:value}));
  };
  //console.log(categories);
  const listCategories = categories.map((category) => (
    <option key={category}>{category}</option>
  ));
  
  return (
    <>
      <form onSubmit={submitHandler} className="new-task-form">
        <label>
          Details
          <input value={newTaskItem.text} onChange={inputHandler} type="text" name="text" required/>
        </label>
        <label>
          Category
          <select onChange={inputHandler} name="category">
            {/* render <option> elements for each category here */}
            {listCategories}
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    </>
  );
}

export default NewTaskForm;
