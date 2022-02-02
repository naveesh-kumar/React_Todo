import { combineReducers } from "redux";
import { ADDTODO, CLEARTODOS, REMOVETODO, UPDATETODOSTATUS } from "./action";
import MyTodo from "../MyTodo";

//TODOS REDUCERS
export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case ADDTODO: {
      let todo = action.payload.trim();
      let todoIndex = findTodo(todo, state);

      if (todo) {
        if (todoIndex === -1) {
          let myTodo = new MyTodo(todo, false);
          return [...state, myTodo];
        }
        return state;
      }
    }

    case REMOVETODO: {
      let newTodos = state.filter((myTodo) => {
        return myTodo.get().todo !== action.payload;
      });
      return [...newTodos];
    }

    case CLEARTODOS: {
      return [];
    }

    case UPDATETODOSTATUS: {
      let { status, todo } = action.payload;
      let todoIndexToBeUpdated = findTodo(todo, state);

      if (todoIndexToBeUpdated >= 0) {
        state[todoIndexToBeUpdated].set(status);
        return [...state];
      }
      break;
    }

    default:
      return state;
  }
};

const findTodo = (todo, myTodos) => {
  let index = myTodos.findIndex((myTodo) => {
    return myTodo.get().todo.toLowerCase() === todo.toLowerCase();
  });
  return index;
};

//TODO REDUCER

export const reducers = combineReducers({
  todo: todoReducers,
});
