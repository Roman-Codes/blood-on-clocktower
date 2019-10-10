import React from 'react';
import roles from '../../data/roles';

const DrunkPicker = ({ rolesInGame }) =>{
    
    let availableRoles = roles;

    if (rolesInGame.length) {
        rolesInGame.forEach(takenRole =>  {
            availableRoles = availableRoles.filter(role => role.name !== takenRole);
        });
    }

    return(
        <select>
            <option selected="true" disabled="disabled">Choose Role</option>
            {availableRoles.map(role => {
                if (role.alignment === 'townsfolk'){
                    return <option>{role.name}</option>
                }
            })}
        </select>
    )
}

export default DrunkPicker;