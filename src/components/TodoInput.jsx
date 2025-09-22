import React, { useState } from "react";
import TodoTaskList from './TodoTaskList'
const TodoInput = () => {

// Stored all the input values in an array 
const [inputValue, setInputValue] = useState([]);

// Stored new input value 
const [userInput , setUserInput] = useState("");

const handleSubmit = (e) =>{
    e.preventDefault();
    setInputValue([...inputValue, userInput]);
    setUserInput("");
}

const deleteTask = (taskValue) =>{
  const deleteValue = inputValue.filter((item)=> item !==taskValue);
  setInputValue(deleteValue);
}

  return (
    <>
      <div className="todo-input">
        <form onSubmit={handleSubmit} className="input-add flex item-center justify-center gap-4 my-10" >
          <input
            type="text"
            value={userInput}
            onChange={(e)=> setUserInput(e.target.value)}
            placeholder="Add a new task"
            className="border p-2 w-1/2 border-2 border-gray-400 rounded-lg outline-none py-2 px-4 "
          />
          <button className="bg-orange-500 text-white rounded-lg flex item-center justify-center py-2 px-4">
            Add Task
          </button>
        </form>
      </div>
    <TodoTaskList inputValue = {inputValue} deleteTask={deleteTask}/>
    </>
  );
};

export default TodoInput;
