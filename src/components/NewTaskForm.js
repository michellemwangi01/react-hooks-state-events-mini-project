import React, { useState } from "react";



function NewTaskForm({ categories,  getMeTheForm }) {
  const [newListItem, setNewListItem] = useState({
    text: "",
    category: ""
  });

  console.log(getMeTheForm);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newListItem);
    getMeTheForm("newListItem")

  };
 
  const inputHandler = (e) => {
    setNewListItem({
      ...newListItem,
      [e.target.name]: e.target.value
    });
  };

  const listCategories = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  return (
    <>
    <form onSubmit={submitHandler} className="new-task-form">
      <label>
        Details
        <input onChange={inputHandler} type="text" name="text" />
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
