/* eslint-disable react/prop-types */
import Menu from "./Menu";
import { useGameOver } from "../hooks/useGameOver.js";
import Tetris from "./Tetris.jsx";
import "./Game.css";
const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const start = () => {
    resetGameOver();
    console.log("gameOver is" + `${gameOver}`);
  };
  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris
          rows={rows}
          columns={columns}
          setGameOver={setGameOver}
        />
      )}
    </div>
  );
};

export default Game;
