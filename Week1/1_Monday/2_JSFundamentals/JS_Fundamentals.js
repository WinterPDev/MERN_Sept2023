// ! ~ - - JavaScript Fundamentals - - ~

//?     ECMAScript | EScript / ES6 : https://www.w3schools.com/js/js_versions.asp
//?     European Computer Manufacturers Association ... Script

/*
! ====--- JavaScript

*   Release Date: 2005
*   Created to add interactivity with websites via the Browser.
*   Confined to the Browser, unlike NodeJS.
*   Interfaces with the DOM (Document Object Model)
*/

/* 
! ====--- NodeJS
*   Release Date: 2009
*   Built Using: C++ (It's a wrapper for code that compiles JS into C++. Thereby making it work server-side.)
*   Gave JavaScript the ability to: Connect to Databases, Read/Write Files to a Computer, Act as a Server.
*   This opened the door for building both front and back-end code in JavaScript, giving more opportunities for JS developers. 
*/



// ===========================================================

//!    Scope & var w/ Hoisting

//*    Types of Scope
//?    Global : a variable/function defined that's accessible by every aspect of your application!
//?     Local : a variable/function defined that's accessible only within a particular function.

// var food = "Udon";
// function someFunc() {
//     var food = "Churros";
//     console.log(food);
// }

// someFunc();
// console.log(food);


//*     Hoisting & var
/* 
?   Hoisting: Hoisting is when declarations are pushed(hoisted) to the top.

*/

// Hoisting Variables

// console.log(petName); // undefined
// var petName = "Ben"; // Initialization/Assigning the value happens at the line it occurs. Does not move up.
// console.log(petName);

// // Hoisting Functions

// hoistedFunction();

// function hoistedFunction() {
//     console.log('I am hoisted!');
// }



//! let & const variable declarations
/*
*   let variables
?   let is another way to declare a variable, but it is strictly limited to the scope of the code block it is in.
?   You can identify most code 'blocks' when you see curly braces: { }
*/

// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }

// function letFunc() {
//     let x = 22;
//     {
//         let x = 11;
//         console.log(x); // 11
//     }
//     console.log(x); // 22
// }

// letFunc();


/*
*   const variables
?   const is a way to declare a variable that can not be redefined in the same scope. (Such as within a for loop or function)
?   Fun fact: When using const with Objects, you can still manipulate the properties of that Object!
*/

// const example


// const myPet = 'Theo';

// const vacationIdeas = ['Caribbean', 'Europe'];
// vacationIdeas.push('Fiji');
// vacationIdeas.push('Ireland');

// console.log(vacationIdeas);

//* What is Syntactic Sugar?
//?     Concise syntax that provides the same functionality. 
//?     Aka Shorthands! Less code, same functionality! (Though readability can decrease if you lack fluency/awareness of the shorthands!)




//! Destructuring
//? Destructuring is a way that we can unpack/create new variables from objects (Such as arrays!)


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};


//? How do we normally access data in objects?
// console.log(person.firstName);

// const firstName = person.firstName;
const { email, firstName, username, createdAt } = person;
// console.log(firstName);
// console.log(email);




//* Destructuring Lists

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// console.log(animals[0]);

const [, first, second, third] = animals;

// console.log(first); // horse


//? How can we fetch a value, but give it a new variable name at the same time?
const { firstName: First_Name } = person;
// console.log(First_Name);





//!     Spread/Rest

const personCopy = { nickname: "Solid Snake", ...person, altNickname: "Big Boss" };

personCopy.firstName = "Deven";

// console.log(person);
// console.log(personCopy);

//*     Using spread to add to a list without push

const animalsCopy = [...animals, "Charizard"];

// console.log(animalsCopy);



//!     Arrow Functions

// function sumNumbers(n1, n2) {
//     return n1 + n2;
// }

const sumNumbers = (n1, n2) => n1 + n2;
// implicit return! 

// console.log(sumNumbers(4, 2));






//!     Ternary Operators
//?     if else statement one liner

// let hungry = true;

// if (hungry) { // Question
//     console.log("I am hungry!"); // Answer if True
// } else {
//     console.log("I am not hungry!"); // Answer if False
// }

// hungry ?
//     console.log("I am hungry!") :
//     console.log("I am not hungry!")

// const result = condition1 ? value1
//     : condition2 ? value2
//         : condition3 ? value3
//             : value4;



//!     Bonus Stuff

//* Shorthand Object Construction

// Typical Obj
const pokemon = {
    pokeName: 'mawile',
    type: ['steel', 'fairy'],
    id: 303
};

// Auto-populate key with variable names!

// const pokeName = 'mawile';
// const type = ['steel', 'fairy'];
// const id = 303;

// const pokemonShort = { pokeName, type, id };
// console.log(pokemonShort)

//* Truthy Falsy in JavaScript

//?     Truthy values are values that are considered true like a boolean. All values in JS are truthy unless they are defined as falsy'.
//!     Falsy values are values that are considered false in a boolean context, more specifically...
//!         Falsy values are: false, 0, -0, "", null, undefined, and NaN. Otherwise values are truthy!

let foo = -0;

//? This evaluates foo to see if it is truthy or falsy. If truthy, then it executes the code block.
foo ?
    console.log('Truthy!') :
    console.log('Falsy!');


// Where to find more bonus operations in JS: https://blog.logrocket.com/javascript-typescript-shorthands/