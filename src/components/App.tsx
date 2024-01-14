import Nav from "./Nav";
import Intro from "./Intro";
import RestaurantList from "./ RestaurantList";
import "../styles/App.css";
const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Intro />
        <RestaurantList />
      </main>
    </div>
  );
};

export default App;
