import React from "react";
import { useState } from "react";

const PokemonSearch = (props) => {
    // Destructure the callback function from props.
    // This allows us to LIFT the state from the search input into the parent component and get the pokemon we search for!
    const { searchPokemonAxios } = props;

    const [pokeName, setPokeName] = useState("");

    return (
        <fieldset>
            <legend>PokemonSearch.jsx</legend>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    searchPokemonAxios(pokeName);
                }}
            >
                <label>Pokemon Name : </label>
                <input
                    type="text"
                    onChange={(e) => {
                        setPokeName(e.target.value);
                    }}
                />
                <br />
                <button>Search for Pokemon</button>
            </form>
        </fieldset>
    );
};

export default PokemonSearch;
