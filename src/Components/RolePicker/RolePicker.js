import React, { useState } from 'react';
import roles from '../../data/roles';
import RoleOption from '../RoleOption/RoleOption';

const RolePicker = props => {

    const handleChange = e =>{
        props.addRole(roles.find(role => role.name === e.target.value));
        props.setRole(roles.find(role => role.name === e.target.value));
    }

    let availableRoles = roles;

    if (props.rolesInGame.length) {
        props.rolesInGame.forEach(takenRole =>  {
            availableRoles = availableRoles.filter(role => role.name !== takenRole.name);
        });
    }

    return(

        <div>
        	<select id="char" onChange={handleChange}>
        	    <option selected="true" disabled="disabled">Choose Role</option>
        	    {availableRoles.map(role => {
        	            return <RoleOption role={role} />
        	        }
        	    )}
        	</select>
        </div>
    )
}

export default RolePicker;