import React from 'react';
import {useState} from 'react';

const initialGameBoard = [   // Array of arrays representing the initial game board state
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectBox, activePlayerSymbol}) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleBoxClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard)=> {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        })

        onSelectBox();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
            <ol>
                {row.map((PlayerSymbol,colIndex) => (
                    <li key={colIndex}>
                        <button onClick={()=>handleBoxClick(rowIndex, colIndex)}>{PlayerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>
    ))}
        </ol>
    );
}