import Game from "./components/Game";
import "./index.css";
const App = () => {
  return (
    <div className="App">
      <Game
        rows={20}
        columns={10}
      />
    </div>
  );
};

export default App;
