interface Props {
  a?: number;
  b?: number;
}

const obj: Props = {a: 5};

const obj2: Required<Props> = {a: 5}

{
  interface Todo {
    title: string;
  }

  const todo: Readonly<Todo> = {
    title: "Delete inactive users",
  }
  todo.title = "Hello";
  console.log(todo);
}
