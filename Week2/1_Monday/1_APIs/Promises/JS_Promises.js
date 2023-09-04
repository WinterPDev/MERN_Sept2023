const orderSushi = () =>
    new Promise(
        //* Our Callback function that kicks off the Promise. orderSushi();
        //? Pending is the state before Resolve or Reject.
        //? Resolve => Function that executes if it succeeds.
        //? Reject => Function that executes if it fails.
        (resolve, reject) => {
            let sushi = { fish: "Tuna" };

            sushi = ""; // Evaluate to falsy (false)

            if (sushi) {
                resolve(`You acquired ${sushi.fish} sushi!`);
            } else {
                reject(`We're out of fish. . .`);
            }
        }
    );

orderSushi()
    .then((response) => {
        // If the promise succeeds and it is resolved... we run this code!
        console.log(response);
    })
    .catch((err) =>
        // If the promise fails and it is not resolved... we run THIS code!
        console.log(`There was a problem with your order : ${err}`)
    );

    console.log("Order is completed! ");

//* Your code will continue to run while the promise is resolving!
//! So if your code is dependant on data being fetched with a promise, you will want to use a .then for it!
