import './App.css';
import Header from './components/Header';
import FoodCard from './components/FoodCard';
import FoodRow
  from './components/FoodRow';
function App() {
  return (
    <div className="App">
      <Header title={"My Favorite Foods"} />
      <FoodRow>

        <FoodCard foodName={"Udon Noodles"}
          foodDesc={"Large Japanese Noodles"}
          foodLikes={0}
        />
        <FoodCard
          foodName={"Soba Noodles"}
          foodDesc={"Buckwheat Japanese Noodles."}
          foodLikes={2}
        />
        <FoodCard
          foodName={"Chicken Alfredo"}
          foodDesc={"Noodles, alfredo sauce, chicken."}
          foodLikes={5}
        />

      </FoodRow>
    </div>
  );
}

export default App;
