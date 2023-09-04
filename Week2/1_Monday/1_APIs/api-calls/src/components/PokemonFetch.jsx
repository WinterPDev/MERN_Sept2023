import React from "react";
import { useState } from "react";
import axios from "axios";

import PokemonEntry from "./PokemonEntry";
import PokemonSearch from "./PokemonSearch";

//? Fetch versus async & await . . .
//? async & await will pause the rest of the code in a function until it resolves.
//? --> This can make our code more readable.

// ------------------------------

//* fetch and .then() allows code outside the block of the .then() method chain to run immediately without waiting.
//* --> But it can make our code shorter/more succinct.

// ------------------------------

//! It is good to be familiar with both of them. But we'll primarily stick to fetch/then going forward because of how we are building our functions.

// ------------------------------

const PokemonFetch = () => {
    const [pokemon, setPokemon] = useState();

    const getPokemonFetch = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/mawile`)
            .then((res) => {
                // If we return here, we'll get our response converted to JSON.
                return res.json(); // res.json() is another promise, so we'll need a .then() to pause until it finishes!
            })
            .then((jsonRes) => {
                
                // Now we can pick up the return from the previous function as "jsonRes" and now we have the finished JSON object.
                console.log(jsonRes);
                setPokemon(jsonRes);
            })
            .catch((err) => console.log(err));
    };

    //? Example of using async await for those interested!
    const getPokemonAsyncAwait = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/charmander`);
        const jsonRes = await res.json();
        setPokemon(jsonRes);
    };

    const getPokemonAxios = () => {
        //! Axios allows us to skip converting the object we fetch into JSON.
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
            .then((res) => {
                setPokemon(res.data);
            })
            .catch((err) => console.log(err));
    };

    const searchPokemonAxios = (pokeName) => {
        //! Axios allows us to skip converting the object we fetch into JSON.
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((res) => {
                setPokemon(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <fieldset>
            <legend>PokemonFetch.jsx</legend>
            <p>
                Using <code>fetch()</code> and
                <code>.then() && .catch()</code> we'll fetch some Pokemon Data!
            </p>

            <button onClick={getPokemonFetch}>Fetch Pokemon Data</button>
            <button onClick={getPokemonAsyncAwait}>Async Pokemon Data</button>
            <button onClick={getPokemonAxios}>Axios Pokemon Data</button>

            <PokemonSearch searchPokemonAxios={searchPokemonAxios} />

            <div>
                {pokemon ? (
                    <PokemonEntry
                        pokeName={pokemon.name}
                        pokeImg={pokemon.sprites.front_default}
                    />
                ) : (
                    <p>Click button to start!</p>
                )}
            </div>
        </fieldset>
    );
};

export default PokemonFetch;
