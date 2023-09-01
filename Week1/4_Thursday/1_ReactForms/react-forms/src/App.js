import { useState } from 'react';

import './App.css';
import FormPage1 from './views/FormPage1';
import FormPage2 from './views/FormPage2';
import GameList from './views/GameList';
import GameTable from './components/GameTable';
import GameForm from './components/GameForm';
function App() {

  const [gameList, setGameList] = useState([]);

  const addGame = (newGame) => {
    setGameList([...gameList, newGame]);
  }

  const removeGame = (deleteIdx) => {
    const filterList = gameList.filter(
      (game, idx) => idx !== deleteIdx
    )
    setGameList(filterList);
  }

  return (
    <fieldset>
      <legend>ParentComponent - App.js</legend>

      <div className="App">
        <p>My Favorite Games</p>
        <GameForm addGame={addGame} />
        <GameTable gameList={gameList} removeGame={removeGame} />
      </div>
    </fieldset>
  );
}

export default App;
