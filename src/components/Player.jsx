import {useState} from 'react'; // import the useState hook from the react library

export default function Player({initialName, symbol,}) { // define the player component
    const [isEditing, setIsEditing] = useState(false); // create a state variable to track whether the player name is being edited
    const [playerName, setPlayerName] = useState(initialName); // create a state variable to store the player name

    function handleEditClick() { // define a function to handle the edit button click
        return (
            setIsEditing((editing)=> !isEditing)
        );
    }

    function handleChange(event) { // define a function to handle the player name input change
        setPlayerName(event.target.value); // update the player name state variable with the new value
    }

    let editablePlayerName; 

    if(isEditing) { 
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange}></input>
    }else{
        editablePlayerName = <span className="player-name">{playerName}</span>
    }

    return(
        <>
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li>
        </>
    );
}