import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { removeTodoAction, updateTodoStatusAction } from "./Store/action.js";

function Todo(props) {
  return (
    <div className={props.myTodo.completed ? "todo-clicked" : "todo"}>
      <p
        onClick={() => {
          props.updateStatus(!props.myTodo.completed, props.myTodo.todo);
        }}
      >
        {props.myTodo.todo}
      </p>
      <div className="symbols">
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => {
            props.updateTodo(props.myTodo.todo);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            props.removeTodo(props.myTodo.todo);
          }}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps=(dispatch)=>{
  return {
    removeTodo: (todo)=>{
      dispatch(removeTodoAction(todo))
    },
    updateStatus:(status, todo)=>{
      dispatch(updateTodoStatusAction(status, todo))
    }
  };
}

export default connect(null, mapDispatchToProps)(Todo);
