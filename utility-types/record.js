"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
cats.boris;
(function pick() {
    var todo = {
        title: "Clean room",
        completed: false,
    };
    console.log(todo);
})();
(function omit() {
    var todo = {
        title: "Clean room",
        completed: false,
        createdAt: 123123123123,
    };
    var todoInfo = {
        title: "Pick up kids",
        description: "Kindergarten closes at 5pm",
    };
})();
(function exclude() {
})();
(function extract() {
})();
(function nonNullable() {
})();
(function parameters() {
    var a = ["1", 2];
    console.log(a);
    var _a = true;
    var type_a = typeof _a;
    console.log(type_a);
    var type_t3 = [{ a: 1, b: '' }];
    var type_t4 = [1, 2, 'a'];
    // type T6 = Parameters<string>;
    // type T7 = Parameters<Function>;
})();
(function constructorParameters() {
    var type_to = ["string"];
    // type T4 = ConstructorParameters<Function>;
})();
(function _infer() {
})();
(function returnType() {
    // type T7 = ReturnType<string>;
    // type T8 = ReturnType<Function>;
})();
(function instanceType() {
    var C = /** @class */ (function () {
        function C() {
            this.x = 0;
            this.y = 0;
        }
        return C;
    }());
    ;
})();
(function thisParamType() {
    function toHex() {
        return this.toString(16);
    }
    function numberToString(n) {
        return toHex.apply(n);
    }
    console.log(numberToString(12));
})();
(function omitThisParam() {
    function toHex() {
        return this.toString(16);
    }
    var fiveToHex = toHex.bind(5);
    console.log(fiveToHex());
})();
(function thisType() {
    function makeObject(desc) {
        var data = desc.data || {};
        var methods = desc.methods || {};
        return __assign(__assign({}, data), methods);
    }
    var obj = makeObject({
        data: { x: 0, y: 0 },
        methods: {
            moveBy: function (dx, dy) {
                this.x += dx;
                this.y += dy;
            }
        }
    });
    obj.x = 10;
    obj.y = 20;
    obj.moveBy(5, 5);
})();
