function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

let user = {};

console.log(isEmpty(user)); // true

user.name = "John";

console.log(isEmpty(user)); // false
