import {useState} from 'react';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from './components/Log';

function App() {
  const [actPlayer, setActPlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectBox () {
    setActPlayer((curPlayer) => curPlayer === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if(prevTurn > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [{row: rowIndex, col: colIndex, player: currentPlayer}, ...prevTurns];
    });
  }

  return (

    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={actPlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={actPlayer === 'O'}/>
        </ol>
        <GameBoard onSelectBox={handleSelectBox} activePlayerSymbol={actPlayer} />
      </div>
    </main>
  )
}

export default App
