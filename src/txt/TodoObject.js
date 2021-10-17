const code = `export default class TodoObject {
    constructor({ todoList, lastIdx }) {
      this.todoList = todoList;
      this.lastIdx = lastIdx;
    }
  
    setTodoObject(object) {
      return new TodoObject(object);
    }
  
    postTodo(item) {
      this.todoList.push(item);
      this.lastIdx++;
    }
  
    putTodo({ id, value }) {
      this.todoList = this.todoList.map((todo) => {
        if ("" + todo.id === id) {
          return { id: todo.id, value };
        } else return todo;
      });
    }
  
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => "" + todo.id !== id);
    }
  }
`;

export default code;