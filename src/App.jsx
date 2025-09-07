import React, { useState } from "react";
import Board from "./Board";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false); // NEW state

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6],            // diagonals
  ];

  const checkWinner = (newBoard) => {
    for (let [a, b, c] of winningPatterns) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return newBoard.every((cell) => cell) ? "Draw" : null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXTurn(true);
  };

  return (
    
      <div className="game">

        <h1>Tic Tac Toe</h1>
        <h2>
          {winner
            ? winner === "Draw"
              ? "It's a Draw!"
              : `${winner} Wins!`
            : `Turn: ${isXTurn ? "X" : "O"}`}
        </h2>

        <Board board={board} handleClick={handleClick} />

        <button className="button" onClick={resetGame}>Restart</button>
      </div>
    
  );
};

export default App;
