import React, { useState } from 'react';
import RolePicker from '../RolePicker/RolePicker';
import roles from '../../data/roles';

const Player = props => {
    const [role, setRole] = useState({});
    console.log(role);
    return(
        <div>
        	<RolePicker 
                setRole={setRole}
                rolesInGame={props.rolesInGame}
        	/>
        	{role.name ? <h1>I am {role.name}</h1>: <h1>Waiting</h1>}
            <ul>
                {}
            </ul>
        </div>
    )
}

export default Player;