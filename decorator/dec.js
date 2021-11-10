var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'reflect-metadata';
function first() {
    console.log('first(): factory evaluated');
    return function (target, propertyKey, descriptor) {
        console.log('first(): callend');
    };
}
function second() {
    console.log('second(): factory evaludated');
    return function (target, propertyKey, descriptor) {
        target[propertyKey]();
        console.log("second(): called");
    };
}
class ExampleClass {
    method() {
        console.log('here');
    }
}
__decorate([
    first(),
    second(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleClass.prototype, "method", null);
const e = new ExampleClass();
e.method();
(function classDecorator() {
    function sealed(constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
        console.log('sealed');
    }
    let BugReport = class BugReport {
        constructor(t) {
            this.type = "report";
            this.title = t;
        }
    };
    BugReport = __decorate([
        sealed,
        __metadata("design:paramtypes", [String])
    ], BugReport);
    const b = new BugReport('bug');
})();
(() => {
    function reportableClassDecorator(constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.reportingURL = "http://www...";
            }
        };
    }
    let BufReport = class BufReport {
        constructor(t) {
            this.type = "report";
            this.title = t;
        }
    };
    BufReport = __decorate([
        reportableClassDecorator,
        __metadata("design:paramtypes", [String])
    ], BufReport);
    const bug = new BufReport("Needs dark mode");
    console.log(bug.title);
    console.log(bug.type);
    // console.log(bug.reportingURL);
})();
(function methodDecorator() {
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    __decorate([
        enumerable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Greeter.prototype, "greet", null);
    function enumerable(value) {
        return function (target, propertyKey, descriptor) {
            descriptor.enumerable = value;
        };
    }
})();
(function property() {
    const formatMetadataKey = Symbol("format");
    function format(formatString) {
        return Reflect.metadata(formatMetadataKey, formatString);
    }
    function getFormat(target, propertyKey) {
        return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
    }
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            let formatString = getFormat(this, "greeting");
            return formatString.replace('%s', this.greeting);
        }
    }
    __decorate([
        format("Hello, %s"),
        __metadata("design:type", String)
    ], Greeter.prototype, "greeting", void 0);
    const c = new Greeter("hello");
    console.log(c.greet());
})();
