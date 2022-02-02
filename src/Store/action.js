//ACTION TYPES
export const ADDTODO = "ADDTODO";
export const REMOVETODO = "REMOVETODO";
export const CLEARTODOS = "CLEARTODOS";
export const UPDATETODOSTATUS = "UPDATETODOSTATUS";
export const UPDATETODO = "UPDATETODO"

//ACTION PROVIDERS
export const addTodoAction = (todo)=>{
  return {
    type:ADDTODO,
    payload:todo
  }
}

export const removeTodoAction = (todo)=>{
  return {
    type:REMOVETODO,
    payload:todo
  }
}

export const clearTodosAction = () =>{
  return {
    type:CLEARTODOS
  }
}

export const updateTodoStatusAction = (status, todo)=>{
  return {
    type:UPDATETODOSTATUS,
    payload:{status, todo}
  }
}

export const updateTodo = (todo)=>{
  return {
    type:UPDATETODO,
    payload:todo
  }
}