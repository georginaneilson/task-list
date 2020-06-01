import React from 'react';
import ToDoList from '../ToDoList';

class TaskList extends React.Component {

  handleDelete = (index) => {
    const {props} = this.props
    const newArr = [...props.tasks];
    let completedTask = newArr.splice(index, 1);
    let engineer = { name: props.name, tasks: newArr, completedTasks: [...props.completedTasks, completedTask], color: props.color}
     
    this.props.onDelete(engineer, this.props.indexKey);
  }


  render() {
    const {props} = this.props
    return(
      <div className={`task-list task-list--${props.color}`}>
        <div className=''>
          <div className='header'>
              <h2 className='header-title'>
              {props.name}'s tasks
              </h2>
            </div>
             {props.tasks && <ToDoList tasks={props.tasks} onDelete={this.handleDelete} />}
          {props.completedTasks && <ToDoList modifier={'done'} tasks={props.completedTasks} />}
        </div>
      </div>
    );
  } 
}

export default TaskList;
