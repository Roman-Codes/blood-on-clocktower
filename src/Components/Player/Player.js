import React, { useState, useEffect } from 'react';
import RolePicker from '../RolePicker/RolePicker';
import roles from '../../data/roles';
import NamePicker from '../NamePicker/NamePicker';

const Player = ({ rolesInGame, removeRole,addRole, numPlayers, playerNames}) => {
    const [role, setRole] = useState({});
    const [name, setName] = useState('');

    const clearMyRole = () => {
        setRole({});
        removeRole(role.name);
    }

    const clearMyName = () => {
        setName('');
    }

    const handleRoleRemove = e => {
        e.preventDefault();
        clearMyRole();
    }

    const handleNameNameRemove = e =>{
        e.preventDefault();
        clearMyName();
    }

    useEffect( () => {
        clearMyRole();
    }, [numPlayers])
    
    return(
        <div>
            {!role.name? 
        	<RolePicker 
                setRole={setRole}
                rolesInGame={rolesInGame}
                addRole={addRole}
            />:
            <button onClick={handleRoleRemove}> Change Role </button>}

            {!name?
            <NamePicker
                setName={setName}
                playerNames={playerNames}
            />:
            <button onClick={clearMyName}>Change Name</button>}

        	{role.name ? <h3>I am {name} and my role is {role.name}</h3>: <h2>Please Pick a role.</h2>}
            <ul>
                {}
            </ul>
        </div>
    )
}

export default Player;