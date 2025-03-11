import {useState} from 'react';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [actPlayer, setActPlayer] = useState('X');

  function handleSelectBox () {
    setActPlayer((curPlayer) => curPlayer === 'X' ? 'O' : 'X');
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
