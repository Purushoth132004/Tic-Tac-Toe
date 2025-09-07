import React from "react";
import Cell from "./Cell";

const Board = ({ board, handleClick }) => {
  return (
    <div className="board">
      {board.map((cell, i) => (
        <Cell key={i} value={cell} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
};

export default Board;
