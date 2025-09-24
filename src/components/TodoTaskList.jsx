import React from 'react'

const TodoTaskList = ({storeData, deleteTask}) => {
  return (
        <>
    <div className='task-list my-5 p-5 border mx-auto max-w-4xl'>
    <h2 className='text-3xl text-center font-semibold mb-4'>Task List</h2>
    <ul>
      {storeData.map((item, index) => (
        <li key={index} className='mb-3'>
          <div className="input-data flex items-center justify-between py-2 px-4 border-t-0 border-l-0 border-r-0 pb-4 outline-none border-b border-b-gray-500 border-2">
            <p className='m-0 flex item-center justify-start text-lg'>{item}</p>
            <button onClick={()=> deleteTask(item)} className='bg-red-500 text-white py-2 px-4 rounded-md'>Delete</button>
          </div>
        </li>
      ))}
    </ul>
    </div>
    </>
  )
}

export default TodoTaskList