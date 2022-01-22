import React from "react";
import Button from "./Button";

function Message(props) {
  
  return (
    <div className="todo-message">
      <h4>You have {props.number} uncompleted todos today...</h4>
      <Button text="Clear All" clickHandler={props.clickHandler} />
    </div>
  );
}

export default Message;
