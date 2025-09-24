import React, { useState } from "react";
import TodoTaskList from "./TodoTaskList";

const TodoInput = () => {
  //  User Input State
  const [userInput, setUserInput] = useState("");
  // Stored the user input value in the state
  
  const [storeData , setStoreData] = useState([]);


  const handleChange = (e) => {
    e.preventDefault();
    if(userInput === ""){
      return alert("Please Enter Your Task");
    }
    if(storeData.includes(userInput)){
      return alert("Already user present");
    }
    setStoreData([...storeData,userInput]);
    setUserInput("");
  };

  // If user delete the task from the list
  const deleteTask = (task) => {
      const restValue = storeData.filter((item)=> item !== task);
      setStoreData(restValue);

  }

  // find the duplicate text input
  // const duplicateText = (text) =>{
  //   const duplicateVal = storeData.filter((item)=> )
  // }

  return (
    <>
      <div className="user-input my-5 p-5 border mx-auto max-w-4xl">
        <form onSubmit={handleChange} action="" className="flex gap-3 mx-auto">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            className="border border-1 flex-1 rounded-md border-gray-900 py-2 px-4"
            placeholder="Enter your Task"
          />
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">
            Add Task
          </button>
        </form>
        <TodoTaskList storeData={storeData} deleteTask={deleteTask} />
      </div>
    </>
  );
};

export default TodoInput;
