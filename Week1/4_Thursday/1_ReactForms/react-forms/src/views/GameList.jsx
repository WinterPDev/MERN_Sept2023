import { useState } from 'react';
import FormDisplayComponent from '../components/FormDisplayComponent';


const GameList = () => {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);

    const [gameList, setGameList] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newGame = { title, year };
        console.log(newGame);

        setGameList([...gameList, newGame]);
        console.log(gameList)
    }

    const removeGame = (deleteIdx) => {
        const filterList = gameList.filter(
            (game, idx) => idx !== deleteIdx
        )
        setGameList(filterList);
    }


    return (
        <>
            <fieldset>
                <legend>FormPage2.jsx</legend>

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










                <FormDisplayComponent title={title} year={year} />









            </fieldset>

            <table border="1">
                <thead>
                    <tr>
                        <th> Title</th>
                        <th> Year </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        gameList.map(
                            (eachGame, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{eachGame.title}</td>
                                        <td>{eachGame.year}</td>
                                        <td>
                                            <button onClick={() => removeGame(idx)} >Delete Game</button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table >
        </>
    )




}


export default GameList;