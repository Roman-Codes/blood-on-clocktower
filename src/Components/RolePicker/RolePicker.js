import React, { useState } from 'react';
import roles from '../../data/roles';
import RoleOption from '../RoleOption/RoleOption';

const RolePicker = props => {

    const handleChange = e =>{
        console.log('setting role');
        props.addRole(e.target.value);
        props.setRole(roles.find(({name}) => name === e.target.value));
    }

    let availableRoles = roles;

    if (props.rolesInGame.length) {
        props.rolesInGame.forEach(takenRole =>  {
            availableRoles = availableRoles.filter(role => role.name !== takenRole);
        });
    }

    return(
        <select onChange={handleChange}>
            <option selected="true" disabled="disabled">Choose Role</option>
            {availableRoles.map(role => {
                    return <RoleOption role={role} />
                }
            )}
        </select>
    )
}

export default RolePicker;