import React from "react";
import TodoInput from "./TodoInput.js";
import Todo from "./Todo.js";
import Message from "./Message.js";
import PopUp from "./PopUp.js";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  // const [todo, setTodo] = React.useState(null);
  // const [todoExists, setTodoExists] = React.useState(false);

  // const addTodo = (inputRef, index) => {
  //   let todo = (inputRef.current.value).trim();
  //   let isTodoExist = findTodo(todo) >= 0 ? true : false;

  //   if (todo && !isTodoExist) {
  //     setMyTodos((prevTodos) => {
  //       inputRef.current.value = "";
  //       let myTodo = new MyTodo(todo, false);
  //       if (index >= 0) {
  //         prevTodos[index] = myTodo;
  //         setTodo(null);
  //         return [...prevTodos];
  //       }
  //       return [...prevTodos, myTodo];
  //     });
  //   } else if (isTodoExist) {
  //     setTodoExists(isTodoExist);
  //   }
  // };

  // const removeTodo = (todoToBeDeleted) => {
  //   setMyTodos((prevTodos) => {
  //     let newTodos = prevTodos.filter((myTodo) => {
  //       return myTodo.get().todo !== todoToBeDeleted;
  //     });
  //     setTodo({
  //       value: "",
  //       index: NaN,
  //     });
  //     return [...newTodos];
  //   });
  // };

  // const clearTodos = () => {
  //   setTodo({
  //     value: "",
  //     index: NaN,
  //   });
  //   setMyTodos([]);
  // };

  // const updateTodo = (todo) => {
  //   setTodo(todo);
  // };

  // const findTodo = (todo) => {
  //   let index = myTodos.findIndex((myTodo) => {
  //     return myTodo.get().todo.toLowerCase() === todo.toLowerCase();
  //   });
  //   return index;
  // };

  // const updateStatus = (status, todo) => {
  //   let index = findTodo(todo);
  //   setMyTodos((prevTodos) => {
  //     prevTodos[index].set(status);
  //     return [...prevTodos];
  //   });
  // };

  // let number = myTodos.reduce((accum, todo) => {
  //   if (todo.get().completed === false) {
  //     accum++;
  //   }
  //   return accum;
  // }, 0);

  // return (
  //   <>
  //     {todoExists && <PopUp clickHandler={setTodoExists}/>}
  //     <div className="todo-container">
  //       <h2>What's plan for today?</h2>
  //       <TodoInput clickHandler={addTodo} todo={todo} />
  //       <div className="todos-list">
  //         {myTodos &&
  //           myTodos.map((myTodo, i) => {
  //             return (
  //               <Todo
  //                 myTodo={myTodo.get()}
  //                 key={i}
  //                 removeTodo={removeTodo}
  //                 updateTodo={updateTodo}
  //                 updateStatus={updateStatus}
  //               />
  //             );
  //           })}
  //       </div>
  //       {myTodos.length > 0 && <Message number={number} clickHandler={clearTodos} />}
  //     </div>
  //   </>
  // );
  return (
    <>
      <div className="todo-container">
      <h2>What's plan for today?</h2>
        <TodoInput />
        <div className="todos-list">
          {props.myTodos &&
            props.myTodos.map((myTodo, i) => {
              return <Todo myTodo={myTodo.get()} key={i} />;
            })}
        </div>
        {props.myTodos.length > 0 && <Message />}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  let {todo} = state;
  return {
    myTodos: todo,
  };
};

export default connect(mapStateToProps, null)(App);
