// console.log('Hello from script.js');
// document.write('Hello from script.js');

// var yourName = window.prompt('What is your name?');
// window.alert('Hello ' + yourName + '!');
// var is_true = confirm('Are you sure?');

// if (is_true) {
//     document.write('<b>' + yourName + '</b>');
// }

// let thinkingOf;
// let guess;
// let attempts = 0; // Initialize attempts counter
// // Initialize the computer's number
// thinkingOf = Math.ceil(Math.random() * 1000);
// // Play until user guesses the number
// guess = window.prompt("I'm thinking of a number between 1 and 1000. What is it?");
// while (guess != thinkingOf) {
//     attempts++; // Increment attempts counter
//     // Evaluate the user's guess
//     if (guess < thinkingOf) {
//         guess = window.prompt("Your guess of " + guess + " was too low. Guess Again");
//     } else {
//         guess = window.prompt("Your guess of " + guess + " was too high. Guess Again");
//     }
// }
// // The user has correctly guessed the number
// attempts++; // Increment attempts counter for the correct guess
// window.alert(guess + " is correct! It took you " + attempts + " attempts.");


// function power(x, y) {
//     let pow = 1;
//     for (let i = 0; i < y; i++) {
//         pow *= x;
//         console.log(pow);
//     }
// }

// power(2, 3); // 8

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.newName = newName;
// }

// function newName(name) {
//     this.name = name;
// }

// let person1 = new Person('John', 25);
// console.log(person1.name); // John

// person1.newName('Jane');
// console.log(person1.name); // Jane

// let Person = {
//     name: 'John',
//     age: 25,
//     color: 'red'
// }

// for (let key in Person) {
//     console.log(key + ': ' + Person[key]);
// }

// let fruits = new Array('apple', 'banana', 'orange', 'grape', 'kiwi');
// // console.log(fruits); 

// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });

// console.log(Math.random()); // Random number between 0 and 1

let d = new Date();
console.log(d); // Current date and time