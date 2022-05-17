import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./components/CalculateWinner";
import "./styles/style.css";

const NEW_GAME= [{ board: Array(9).fill(null), isx: true }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];//history upto current move

  // console.log(history);
  const {winner,winningSquares} = calculateWinner(current.board);

  const handleClick = (position) => {
    if (current.board[position] || winner) return;
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) return last.isx ? "0" : "X";

        return square;
      });
      return prev.concat({ board: newBoard, isx: !last.isx });
    });
    setCurrentMove(currentMove=>currentMove+1);
  };

  const moveTo=(move)=>{
    setCurrentMove(move);
  }
  const onNewGame=()=>{
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      <StatusMessage current={current} winner={winner} />
      <Board board={current.board} handleClick={handleClick} winningSquares={winningSquares} />
      <button className="newgame" onClick={onNewGame}>Start New Game</button>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <h3>Pandey Atul</h3>
    </div>
  );
}

export default App;
