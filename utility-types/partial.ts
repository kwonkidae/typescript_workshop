interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo, ...fieldsToUpdate};
}

const todo1 = {
  title: 'organize dest',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash"
});

console.log(todo2);


