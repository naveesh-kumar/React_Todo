import React from "react";
import Button from "./Button";

function TodoInput(props) {
  const inputRef = React.useRef();

  if(props.todo){
    inputRef.current.value = props.todo.value;
  }

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Enter todo"
        className="todo-input"
        ref={inputRef}
        onKeyPress={(e) => {
          if(e.key=="Enter") props.clickHandler(inputRef, props.todo?.index)
        }}
      />
      <Button
        style={{color:props.color}}
        text="Add todo"
        clickHandler={() => {
          props.clickHandler(inputRef, props.todo?.index);
        }}
      />
    </div>
  );
}

export default TodoInput;
