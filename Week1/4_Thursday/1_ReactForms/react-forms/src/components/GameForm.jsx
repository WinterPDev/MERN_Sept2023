import React, { useState } from 'react'

const GameForm = (props) => {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newGame = { title, year };
        console.log(newGame);

        props.addGame(newGame);
    }


    return (
        <fieldset>
            <legend>GameForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title : </label>
                    <input name="title" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                </div>
                <div>
                    <label>Year : </label>
                    <input name="year" type="number" value={year} onChange={(e) => { setYear(e.target.value) }} />
                </div>

                <input type="Submit" />

            </form>
        </fieldset>
    )
}

export default GameForm