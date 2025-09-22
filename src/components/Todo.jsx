import React from 'react'
import TodoInput from './TodoInput'

const Todo = () => {
  return (
    <>
    <div className='container mx-auto my-5 p-5 border w-1/2'>
    <h1 className='text-4xl text-center font-semibold'>TODO APP</h1>
    <TodoInput/>
  
    </div>
    </>
  )
}

export default Todo