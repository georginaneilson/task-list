import React from 'react'

const ToDoItem = ({content, id, onDelete, modifier}) => {
  if (modifier === "done" ){
  return(
    <div className={`list-item`}>
      <i className="fas fa-check-square"></i>
      {content}
    </div>
  );} else {
  return(
    <div className={`list-item`}>
      <button className="list-item__button" onClick={() => {onDelete(id)}}></button>
      {content}
    </div>
  );
  }
}

export default ToDoItem;