import React, { useState } from 'react';
import RolePicker from '../RolePicker/RolePicker';

const Player = props => {
    const [role, setRole] = useState(null);
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