import React, { useState } from 'react'

function Form() {
    const [input, setInput] = useState ('');

  const handleSubmit = e => {
    e.preventDefault();

    
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Add a Todo' 
        value={input} 
        name='text' 
        className='todo-input'
      />
      <button className='todo-button'>Add Todo</button>
    </form>
  )
}

export default Form
