var cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" }
};
cats.boris;
(function pick() {
    var todo = {
        title: "Clean room",
        completed: false
    };
    console.log(todo);
})();
(function omit() {
    var todo = {
        title: "Clean room",
        completed: false,
        createdAt: 123123123123
    };
    var todoInfo = {
        title: "Pick up kids",
        description: "Kindergarten closes at 5pm"
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
})();
