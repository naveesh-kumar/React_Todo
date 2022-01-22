export default class MyTodo {
  constructor(todo, completed) {
    this.todo = todo;
    this.completed = completed;
  }

  get (){
    return {
      todo:this.todo,
      completed:this.completed,
    }
  }

  set (completed){
    this.completed = completed;
  }
}
