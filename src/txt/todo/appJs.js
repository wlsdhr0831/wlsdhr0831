const code = `const todoList = [{ id: 0, value: "산책하기", status: false }];
const todos = new TodoObject({ todoList, lastIdx: 1 });

todos.postTodo({
    id: todos.lastIdx,
    value: input.value,
    status: false,
});

todos.putTodo({ 
    id: e.currentTarget.parentElement.id, 
    value, 
});

todos.deleteTodo(e.currentTarget.parentElement.id);

let result = Math.floor(todos.doneCnt * 100/(todos.todoCnt + todos.doneCnt));
`;

export default code;