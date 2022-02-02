import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { clearTodosAction } from "./Store/action";

function Message(props) {
  
  return (
    <div className="todo-message">
      <h4>You have {props.number} uncompleted todos today...</h4>
      <Button text="Clear All" clickHandler={props.clearTodo} />
    </div>
  );
}

const mapStateToProps = (state)=>{
  let {todo} = state;
  return{
    number:todo.reduce((accum, todoItem) => {
        if (todoItem.get().completed === false) {
          accum++;
        }
        return accum;
      }, 0)
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    clearTodo:()=>{
      dispatch(clearTodosAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
