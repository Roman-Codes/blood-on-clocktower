import React from 'react';

const RoleOption = props => {

    return(
        <option className={props.role.alignment} value={props.role.name}>{props.role.name}</option>
    )
}

export default RoleOption;