import React, { useState, useEffect } from 'react';
import "./styles.scss";
import Field from './Components/Field/Field';
import NumPlayersPicker from './Components/NumPlayersPicker/NumPlayersPicker';
import roles from './data/roles';
import NameForm from './Components/NameForm/NameForm';
import PlayersList from './Components/PlayersList/PlayersList';
import TurnDisplay from './Components/TurrnDisplay/TurnDisplay';


const App = props =>{

    const [numPlayers, setNumPlayers] = useState(0);
    const [playerNames, setPlayerNames] = useState([]);
    const [rolesInGame, setRolesInGame] = useState([]);
    const [minions, setMinions] = useState([]);
    const [firstNightOrder, setFirstNightOrder] = useState([['placeholder for minions'],'placeholder for demon']);
    const [turnData, setTurnData] = useState({
        number: 1,
        dayTime: true,
        nightTime: false
    });

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

    // this one here is to sort the incoming roles for the firs night order
    const sortFirstNight = (rolesArray) => {
        
        // const roleObj = roles.find( ({ name }) => name === newRole);
        // let firstNightCopy = [...firstNightOrder];
        // firstNightCopy.push(roleObj);

        // const minions = [];

        // for (let i = 2; i < firstNightCopy.length; i++){
        //     if (firstNightCopy[i].alignment === 'minion'){
        //         minions.push(firstNightCopy[i]);
        //     }
        //     if (firstNightCopy[i].alignment === 'demon'){
        //         firstNightCopy[1] = firstNightCopy[i];
        //     }
        // }

        // // const demon = firstNightOrder.find( role => {
        // //     return role.alignment === 'demon';
        // // });
        // firstNightCopy[0] = minions;
        // //  = demon;
        // setFirstNightOrder(firstNightCopy);
        // console.log(firstNightOrder);
    }

    // this one here sorts data for the first night when new roles are added or changed
    useEffect( () => {
        if(rolesInGame.length !== 0){
            const roles = [...rolesInGame]
            sortFirstNight(roles);
        }
    }, [rolesInGame])

    return(
        <div>
            <h1>Welcome to blood on CT</h1>
            
            <NameForm
                playerNames={playerNames}
                setPlayerNames={setPlayerNames}
                numPlayers={numPlayers}
            />
            
            {playerNames.length < 5? /*here need to inser more logic for letting user know how many more players to pick */<h2>Pick more players.</h2>:true}
            
            <TurnDisplay
                turnData={turnData}
                setTurnData={setTurnData}
            />

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
