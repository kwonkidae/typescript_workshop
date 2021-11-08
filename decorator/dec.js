var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.method = function () {
        console.log('here');
    };
    __decorate([
        first(),
        second()
    ], ExampleClass.prototype, "method", null);
    return ExampleClass;
}());
var e = new ExampleClass();
e.method();
(function classDecorator() {
    function sealed(constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
        console.log('sealed');
    }
    var BugReport = /** @class */ (function () {
        function BugReport(t) {
            this.type = "report";
            this.title = t;
        }
        BugReport = __decorate([
            sealed
        ], BugReport);
        return BugReport;
    }());
    var b = new BugReport('bug');
})();
(function () {
    function reportableClassDecorator(constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.reportingURL = "http://www...";
                return _this;
            }
            return class_1;
        }(constructor));
    }
    var BufReport = /** @class */ (function () {
        function BufReport(t) {
            this.type = "report";
            this.title = t;
        }
        BufReport = __decorate([
            reportableClassDecorator
        ], BufReport);
        return BufReport;
    }());
    var bug = new BufReport("Needs dark mode");
    console.log(bug.title);
    console.log(bug.type);
    // console.log(bug.reportingURL);
})();
(function methodDecorator() {
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        __decorate([
            enumerable(false)
        ], Greeter.prototype, "greet", null);
        return Greeter;
    }());
    function enumerable(value) {
        return function (target, propertyKey, descriptor) {
            descriptor.enumerable = value;
        };
    }
})();
