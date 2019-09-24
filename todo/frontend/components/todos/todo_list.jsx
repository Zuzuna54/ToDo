import React from 'react';


const Todolist = ({todos}) => {
  const todoTitles = todos.map(todo => {
    return <li key={todo.id} >{todo.title}</li>
  });
  
  return (
    <ul>
      {todoTitles}      
    </ul>
  )
}

export default Todolist;