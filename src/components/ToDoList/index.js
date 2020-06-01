import React from 'react'
import ToDoItem from '../ToDoItem'

const TodoList = (props) => {

  const todos = props.tasks.map((todo, index) => {
    return <ToDoItem modifier={props.modifier} content={todo} key={index} id={index} onDelete={props.onDelete} />
  })

  return( 
    props.modifier === 'done' ? 
      props.tasks.length !== 0 ? 
        <div className='done list-wrapper'>
          <p>Completed tasks</p>
          {todos}
        </div> : <div></div>
    : <div className='list-wrapper'>
        {todos}
      </div>
  );
  
}

export default TodoList;