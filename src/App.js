import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/winner";
import "./styles/style.css";

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isx,setIsx]=useState(true);

  const winner = calculateWinner(board);
  const message= winner?`Winner is ${winner}`:`Next Player is ${isx?'0':'X'}`;

  const handleClick = (position) => {

    if(board[position]||winner)return ;
    setBoard((prev) => {

       return prev.map((square,pos)=>{
            if(pos===position)return isx?'0':'X';
            
            return square;
        })
    });
    setIsx(!isx);
  };

  return (
    <div className="App">
      <h1>
        TIC-TAC-TOE
      </h1>
      <h2>
        {message}
      </h2>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
}

export default App;
