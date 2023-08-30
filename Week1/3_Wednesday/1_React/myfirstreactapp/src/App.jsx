import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {


  return (
    <div className="App">
      <PersonCard firstName={"Solid Snake"} age={30} />
      <PersonCard />
      <PersonCard />
      <PersonCard />
    </div>
  );
}

export default App;
