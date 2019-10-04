import React, { useState } from 'react';
import RolePicker from '../RolePicker/RolePicker';
import roles from '../../data/roles';

const Player = props => {
    const [role, setRole] = useState(null);
    console.log(roles);
    return(
        <div>
        	<RolePicker 
        	    setRole={setRole}
        	/>
        	<h1>I am {role}</h1>
        </div>
    )
}

export default Player;