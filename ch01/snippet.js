"use strict";
function snippet(text, length) {
    if (text.length < length) {
        return text;
    }
    var ellipsis = "...";
    var result = text.slice(0, length - ellipsis.length);
    var lastSpace = result.lastIndexOf(" ");
    result = "" + result.slice(0, lastSpace) + ellipsis;
    return result;
}
var resultOne = snippet('TypeScript is a progmming language that is a strict syntactical superset of Javascript and adds optional static typing to the language.', 40);
console.log(resultOne);
var resultTwo = snippet("Lorem ipsum dolor sit amet");
console.log(resultTwo);
var resultThree = snippet(false, 40);
console.log(resultThree);
var resultFour = snippet("Lorem ipsum dolor sit amet", false);
console.log(resultFour);
var resultFive = snippet("Lorem ipsum dolor sit amet", 20);
console.log(resultFive);
