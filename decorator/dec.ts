function first() {
  console.log('first(): factory evaluated');
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('first(): callend');
  }
}

function second() {
  console.log('second(): factory evaludated');
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    target[propertyKey]();
    console.log("second(): called");
  }
}

class ExampleClass {
  @first()
  @second()
  method(){
    console.log('here')
  }
}

const e = new ExampleClass();
e.method();

(function classDecorator(){
  function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);

    console.log('sealed');
  }

  @sealed
  class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
      this.title = t;
    }
  }

  const b = new BugReport('bug');
})();

(() => {
  function reportableClassDecorator<T extends { new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    }
  }

  @reportableClassDecorator
  class BufReport {
    type = "report";
    title: string;

    constructor(t: string) {
      this.title = t;
    }
  }

  const bug = new BufReport("Needs dark mode");
  console.log(bug.title);
  console.log(bug.type);

  // console.log(bug.reportingURL);
})();

(function methodDecorator(){
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }

    @enumerable(false)
    greet() {
      return "Hello, " + this.greeting;
    }
  }

  function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
    }
  }
})();
