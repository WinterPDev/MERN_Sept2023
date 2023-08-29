//! --------- Functional Paradigm
//?     Functions instead of Objects, with a few rules:
/*
    *> be transparent: every time a function is called with the same inputs it should return the same results 
    *> be pure: the function should remain "pure" and the values of the parameter passed in are not allowed to be changed... we will be making copies of arrays or objects passed in rather than working "in-place"
    *> avoid side effects: the function shouldn't make API calls, write to file-systems or databases, or print to console
    *> never be void: our functions have to return a value... if they don't then what they did must have violated one of our previous rules around side-effects, or mutating an input
*/
//! Major take away: Avoid changing variables, and instead create copies! (No in-place!)

//? The guiding principle for Functional Programming is Purity. Functions perform an explicit purpose consistently.
//? This leads to code that can be: Easier to debug and reuse code due to the pure/minimal functional approach!



//! Callback Functions
//?     A callback function is a function we provide as a parameter to another function.
//?     The function that takes in that parameter will then "call back" to the function passed in.


//* Example:

const pageNavigate = (callback, url, username) => {
    callback(url, username); // splashPage(url, username);
}

const splashPage = (url, username) => {
    console.log(`${username} is going to : ${url} `)
};

const registerPage = (url, username) => {
    console.log(`${username} is going to : ${url} `)
};

// pageNavigate(splashPage, 'www.mywebsite.com', 'Solid_Snake_Case');

// pageNavigate(registerPage, 'www.mywebsite.com/register', 'BigBoss');


//! ----- Freeze
//?     Freeze allows us to preserve the object/array's contents by making it 'read-only'.
//?         Much like in real life, freezing is good at preserving things!

const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

//?     This reinforces functional programming by preventing us from changing the data, and instead requiring we CREATE copies.



// =================== Create ===================

//* Spread: Re-use existing values + appended new item. 


const groceryListCopy = [...groceryList, { "item": "Spicy Ramen", "haveIngredient": false }];

// console.table(groceryListCopy);




// =================== Delete ===================

//* Slice: Remove an element and then append a modified version of that element to a new copy.
//! Splice mutates arrays rather than return a new one. So be careful to not confuse them!

const gotRamen = [...groceryListCopy.slice(0, 5), // Slice is returning an array within the index provided!
{ ...groceryListCopy[5], "haveIngredient": true }
];

// console.log(gotRamen);


//! ----- Map & Filter
//?     Map allows us to avoid writing loops and perform a function to every value within an array.
//?     This is also non-mutating and returns new array.




// =================== Read/Render ===================
//! Array.map() 
//* Example:

const myPokemon = ['Mawile', 'Marowak', 'Squirtle', 'Charizard'];

const pokeObjArray = myPokemon.map(
    (pokemon) => {
        // Create a pokemon object using each name.
        return { 'name': pokemon }
    }
)

// console.log(pokeObjArray);

//! ----- Array.filter()

//?     Filter will return a new Array based ona particular condition.
//?         Using a callback function we can check each element in the array and perform an action.

//* Example:

const noMawile = myPokemon.filter(
    (pokemon) => {
        return pokemon !== 'Mawile';
    }
).map(
    (pokemon) => {
        // Create a pokemon object using each name.
        return { 'name': pokemon }
    }
)

// console.log(noMawile);







//! ----- Where will this be used?
//*     When we work with ReactJS we'll be sticking to functional programming rules and use things like map to generate arrays based on our database,
//*     then return html elements to display on pages, as well as manage our data using "State"

// More reading + Update: https://react.dev/learn/updating-arrays-in-state
