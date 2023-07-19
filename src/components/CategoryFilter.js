import React, { useState } from "react";
import TaskList from "./TaskList";

function CategoryFilter({categories, tasks}) {
  const [btnSelected, setBtnSelected] = useState({})
  const [categorySelected, setCategorySelected] = useState("All")


  const btnClickHandler = (category)=>{
    setBtnSelected({ [category]: true });
    setCategorySelected(category);
    
  }
console.log(categorySelected);
  
  const categoryButtons = categories.map(category => 
  <button 
      key={category}
      className={btnSelected[category] ? "selected" : ""}
      onClick={()=>btnClickHandler(category)}
  >{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
      <TaskList  tasks={tasks} categorySelected={categorySelected} categories={categories}></TaskList>


    </div>
  );
}

export default CategoryFilter;
