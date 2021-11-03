interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: {age: 10, breed: "Persian"},
  boris: {age: 5, breed: "Maine Coon"},
  mordred: {age: 16, breed: "British Shorthair"},
};

cats.boris;

(function pick(){
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

  console.log(todo);
})(); 

(function omit(){
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }

  type TodoPreview = Omit<Todo, "description">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 123123123123,
  };

  type TodoInfo = Omit<Todo, "completed" | "createdAt">;
  const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
  };
})();

(function exclude(){
  type T0 = Exclude<"a" | "b" | "c", "a">;

  type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

  type T2 = Exclude<string | number | (() => void), Function>;
  
})();

(function extract(){
  type T0 = Extract<"a" | "b" | "c", "a" | "f">;

  type T1 = Extract<string | number | (() => void), Function>;
})();

(function nonNullable(){
  type T0 = NonNullable<string | number | undefined>;

  type T1 = NonNullable<string[] | null | undefined>;
})();

(function parameters(){
  type T0 = Parameters<(a: string, b: number) => string>;

  const a: T0 = ["1", 2];
  console.log(a);

})();
