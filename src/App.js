import React, { useState } from 'react';
import './App.css';
import Field from './Components/Field/Field';
import NumPlayersPicker from './Components/NumPlayersPicker/NumPlayersPicker';
import roles from './data/roles';

const App = props =>{

    const [numPlayers, setNumPlayers] = useState(0);

    const [playerNames, setPlayerNames] = useState([]);

    const [rolesInGame, setRolesInGame] = useState([]);

    // add role to play
    const addRole = role => {
        const currentRoles = [...rolesInGame];
        currentRoles.push(role);
        setRolesInGame(currentRoles);
    }
    // remove role from play
    const removeRole = roleToRemove => {
        let currentRoles = [...rolesInGame];
        currentRoles = currentRoles.filter( role => role !== roleToRemove);
        setRolesInGame(currentRoles);
    }

    return(
        <div>
            <h1>Welcome to blood on CT</h1>
            <NumPlayersPicker setNumPlayers={setNumPlayers}/>
            {numPlayers?
            <Field 
                numPlayers={numPlayers}
                playerNames={playerNames}
                rolesInGame={rolesInGame}
                addRole={addRole}
                removeRole={removeRole}
            />:
            <h3>Pick number of players</h3>}
        </div>
    )
}

export default App;
