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

declare function f1(arg: {a: number; b: string}) : void;
(function parameters(){
  type T0 = Parameters<(a: string, b: number) => string>;

  const a: T0 = ["1", 2];
  console.log(a);

  type T1 = Parameters<(s: string) => void>;

  type T2 = Parameters<<T>(arg: T) => T>;
  
  type fun1 = typeof f1;

  const _a: boolean = true;
  
  const type_a = typeof _a;

  console.log(type_a);

  type T3 = Parameters<typeof f1>;

  const type_t3: T3 = [{a: 1, b: ''}];

  type T4 = Parameters<any>
  const type_t4 = [1, 2, 'a'];

  type T5 = Parameters<never>;

  // type T6 = Parameters<string>;

  // type T7 = Parameters<Function>;
})();

(function constructorParameters(){
  type T0 = ConstructorParameters<ErrorConstructor>;

  const type_to: T0 = ["string"];

  type T1 = ConstructorParameters<FunctionConstructor>;

  type T2 = ConstructorParameters<RegExpConstructor>;

  type T3 = ConstructorParameters<any>;

  // type T4 = ConstructorParameters<Function>;

})();

(function _infer(){
  type FunctionRType<T> = T extends (...args: any) => infer R ? R : T;

  type T0 = FunctionRType<string>;
})();

declare function f2(): {a:number, b: string}
(function returnType(){
  type T0 = ReturnType<() => string>;

  type T1 = ReturnType<(s: string) => string>;

  type T2 = ReturnType<<T>() => T>

  type T3 = ReturnType<<T extends U, U extends number[]>() => T>;

  type T4 = ReturnType<typeof f2>;

  type T5 = ReturnType<any>;

  type T6 = ReturnType<never>;

  // type T7 = ReturnType<string>;

  // type T8 = ReturnType<Function>;
})();

(function instanceType(){
  class C {
    x = 0;
    y = 0;
  };

  type typeC = typeof C;

  type T0 = InstanceType<typeC>
})();

(function thisParamType(){
  function toHex(this: number){
    return this.toString(16);
  }

  function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
  }

  console.log(numberToString(12))
})();

(function omitThisParam(){
  function toHex(this: Number) {
    return this.toString(16);
  }

  const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

  console.log(fiveToHex());
})();

(function thisType(){
  type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>
  };

  function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};

    return {...data, ...methods} as D & M;
  }

  let obj = makeObject(
    {
      data: { x: 0, y: 0 }, 
      methods: {
        moveBy(dx:number, dy: number) 
        {  
          this.x += dx; this.y += dy;
        }
      }
    }
  );

  obj.x = 10;
  obj.y = 20;
  obj.moveBy(5, 5);
})();
