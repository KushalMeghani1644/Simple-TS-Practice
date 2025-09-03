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

type person = {
    name: string,
    age: number,
    isStudent: boolean,
}

const person1: person = {
    name: "KING",
    age: 20,
    isStudent: true,
}

const person2: person = {
    name: "JOE",
    age: 21,
    isStudent: false,
}

//console.log(person1);
// console.log(person2);

let array: person[] = [person1, person2];

for (let person of array) {
    // console.log(person);
    console.log(`${person.name} is ${person.age} years old, and is student: ${person.isStudent}`)
}