import React, { useState } from 'react';
import RolePicker from '../RolePicker/RolePicker';
import roles from '../../data/roles';

const Player = props => {
    const [role, setRole] = useState({});

    const handleClick = e => {
        e.preventDefault();
        setRole({});
        props.removeRole(role.name);
    }
    return(
        <div>
            {!role.name 
                ? 
        	<RolePicker 
                setRole={setRole}
                rolesInGame={props.rolesInGame}
                addRole={props.addRole}
            /> 
                :
            <button onClick={handleClick}> Unrole me </button>}
        	{role.name ? <h1>I am {role.name}</h1>: <h2>Please Pick a role.</h2>}
            <ul>
                {}
            </ul>
        </div>
    )
}

export default Player;