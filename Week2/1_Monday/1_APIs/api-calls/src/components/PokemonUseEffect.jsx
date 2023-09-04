import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonEntry from "./PokemonEntry";

const PokemonUseEffect = () => {
    const [pokemon, setPokemon] = useState();

    const [pokeId, setPokeId] = useState(1);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
                .then((res) => {
                    setPokemon(res.data);
                    // Do NOT add the state of the thing you are retrieving into the useEffect Argument! This creates an infinite loop!
                    // Example: [pokemon] at the end of the function responsible for updating the pokemon state.
            })
            .catch((err) => console.log(err));
            // If we only provide empty brackets, the useEffect applies on the load.
    }, [pokeId]);

    const randomPokemon = () => {
        const randId = Math.floor(Math.random() * 151);
        setPokeId(randId);
    };

    return (
        <fieldset>
            <legend>PokemonUseEffect.jsx</legend>
            <button onClick={randomPokemon}>Get Random Pokemon</button>

            {pokemon ? (
                <PokemonEntry
                    pokeName={pokemon.name}
                    pokeImg={pokemon.sprites.front_default}
                />
            ) : (
                <p>Click button to start!</p>
            )}
        </fieldset>
    );
};

export default PokemonUseEffect;
