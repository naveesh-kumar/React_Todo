import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo(props) {

  return (
    <div className={props.myTodo.completed? "todo-clicked" : "todo"}>
      <p onClick={()=>{ props.updateStatus(!props.myTodo.completed, props.myTodo.todo)}}>{props.myTodo.todo}</p>
      <div className="symbols">
      <FontAwesomeIcon icon={faEdit} onClick={()=>{props.updateTodo(props.myTodo.todo)}}/>
      <FontAwesomeIcon icon={faTrash} onClick={()=>{props.removeTodo(props.myTodo.todo)}}/>
      </div>
    </div>
  )
}

export default Todo
