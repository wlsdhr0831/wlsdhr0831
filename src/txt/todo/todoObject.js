const code = `class TodoObject {
  constructor({ todoList, lastIdx }) {
    this.todoList = todoList;
    this.lastIdx = lastIdx;
    this.todoCnt = this.getCnt(false);
    this.doneCnt = this.getCnt(true);
  }

  setTodoObject(object) {
    return new TodoObject(object);
  }

  postTodo(item) {
    this.todoList.push(item);
    this.lastIdx++;
    this.todoCnt = this.getCnt(false);
    this.doneCnt = this.getCnt(true);
  }

  putTodo({ id, value, status }) {
    this.todoList = this.todoList.map((todo) => {
      if ("" + todo.id === id) {
        return { 
          id: todo.id, 
          value: value === undefined ? todo.value : value, 
          status: status === undefined ? todo.status : status 
        };
      } else {
        return todo;
      }
    });
    this.todoCnt = this.getCnt(false);
    this.doneCnt = this.getCnt(true);
  }

  deleteTodo(id) {
    this.todoList = this.todoList.filter((todo) => "" + todo.id !== id);
    this.todoCnt = this.getCnt(false);
    this.doneCnt = this.getCnt(true);
  }

  getCnt(status){
    let cnt = 0;

    this.todoList.forEach(todo => {
      if(todo.status === status){
        cnt++;
      }
    });

    return cnt;
  }
}`;

export default code;