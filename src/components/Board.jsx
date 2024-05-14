/* eslint-disable react/prop-types */
import BoardCell from "./BoardCell";
import "./Board.css";
const Board = ({ board }) => {
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows},1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns},1fr)`,
  };
  return (
    <div
      className="Board"
      style={boardStyles}
    >
      {board.rows.map((row) =>
        row.map((cell, x) => {
          return (
            <BoardCell
              key={x * board.size.columns + x}
              cell={cell}
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
