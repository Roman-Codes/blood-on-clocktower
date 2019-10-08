import React from 'react';

const NamePicker = ({ playerNames, setName }) => {
    const handleChange = e => {
        setName(e.target.value);
    }
    return(
        <div>
            <select name="names" id="names" onChange={handleChange}>
                <option selected="true" disabled="disabled">Choose Name</option>
                {playerNames.map(name => {
                    return <option value={name}>{name}</option>
                })}
            </select>
        </div>
    )
}

export default NamePicker;