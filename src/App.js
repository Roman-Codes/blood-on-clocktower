import React, { useState } from 'react';
import "./styles.scss";
import Field from './Components/Field/Field';
import NumPlayersPicker from './Components/NumPlayersPicker/NumPlayersPicker';
import roles from './data/roles';
import NameForm from './Components/NameForm/NameForm';
import PlayersList from './Components/PlayersList/PlayersList';


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

    // clear all roles when the number of players changes
    const clearAllRoles = () => {
        setRolesInGame([]);
    }

    return(
        <div>
            <h1>Welcome to blood on CT</h1>
            
            <NameForm
                playerNames={playerNames}
                setPlayerNames={setPlayerNames}
                numPlayers={numPlayers}
            />
            
            {playerNames.length < 5? /*here need to inser more logic for letting user know how many more players to pick */<h2>Pick more players.</h2>:true}
            
            <PlayersList
                playerNames={playerNames}
            />

            <Field 
                numPlayers={numPlayers}
                playerNames={playerNames}
                rolesInGame={rolesInGame}
                addRole={addRole}
                removeRole={removeRole}
            />
        </div>
    )
}

export default App;
