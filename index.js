/* function greet(name: string): string {
    return `Hello, ${name}`;
}

console.log(greet("KING"));

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

function multiply(a: number, b: number): number {
    return a *b;
}

console.log(multiply(2, 3));

function divide(a: number, b: number): number {
    return a / b;
}

console.log(divide(6, 2));

function subtract(a: number, b: number): number {
 return a - b;
}

console.log(subtract(5, 2)); */
var person1 = {
    name: "KING",
    age: 20,
    isStudent: true,
};
var person2 = {
    name: "JOE",
    age: 21,
    isStudent: false,
};
//console.log(person1);
// console.log(person2);
var array = [person1, person2];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var person = array_1[_i];
    // console.log(person);
    console.log("".concat(person.name, " is ").concat(person.age, " years old, and is student: ").concat(person.isStudent));
}
