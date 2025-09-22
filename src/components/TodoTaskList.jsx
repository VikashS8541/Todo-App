import React from "react";

const TodoTaskList = ({ inputValue, deleteTask }) => {
  return (
    <>
      <div className="task-list ">
        <ul>
          {inputValue.map((task, index) => (
            <li
              key={index}
              className="border p-2 my-2 rounded-lg border-gray-400"
            >
              <div className="list-remove-btn flex item-center justify-between w-full">
                <span
                  style={{ lineHeight: "1" }}
                  className="flex items-center justify-start"
                >
                  {task}
                </span>
                <button
                  onClick={() => deleteTask(task)}
                  className="bg-red-500 text-white rounded-lg flex item-center justify-center py-2 px-4"
                >
                  Remove Task
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoTaskList;
