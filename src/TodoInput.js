import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { addTodoAction } from "./Store/action.js";

function TodoInput(props) {
  const inputRef = React.useRef();

  if (props?.todo) {
    inputRef.current.value = props.todo;
  }

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Enter todo"
        className="todo-input"
        ref={inputRef}
        onKeyPress={(e) => {
          if (e.key == "Enter") props.addTodo(inputRef);
        }}
      />
      <Button
        style={{ color: props.color }}
        text="Add todo"
        clickHandler={() => {
          props.addTodo(inputRef);
        }}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (inputRef) => {
      let todo = inputRef.current.value;
      inputRef.current.value=""
      dispatch(addTodoAction(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(TodoInput);
