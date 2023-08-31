import './App.css';
import FormPage1 from './views/FormPage1';
import FormPage2 from './views/FormPage2';
import GameList from './views/GameList';
function App() {
  return (
    <div className="App">
      <p>My Favorite Games</p>
      {/* <FormPage1 /> */}
      {/* <FormPage2 /> */}
      <GameList />
    </div>
  );
}

export default App;
