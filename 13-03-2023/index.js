"use strict";
exports.__esModule = true;
var user = { "name": "harsh", "rollno": "24", isPaid: true };
console.log(user);
function getFirstThree(x) {
    return x.slice(0, 3);
}
var firstThree = getFirstThree(user['name']);
console.log(firstThree);
