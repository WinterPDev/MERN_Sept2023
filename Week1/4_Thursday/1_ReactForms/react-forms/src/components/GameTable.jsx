import React from 'react'

const GameTable = (props) => {
    return (
        <>
            <fieldset>
                <legend>GameTable.jsx</legend>



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
                            props.gameList.map(
                                (eachGame, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{eachGame.title}</td>
                                            <td>{eachGame.year}</td>
                                            <td>
                                                <button onClick={() => props.removeGame(idx)} >Delete Game</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }

                    </tbody>
                </table >
            </fieldset>
        </>
    )


}

export default GameTable