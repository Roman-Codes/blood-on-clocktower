import React from 'react';

const NumPlayersPicker = props =>{

    const handleChange = e =>{
        props.setNumPlayers(e.target.value);
        props.clearAllRoles();
    }

    return(
        <select onChange={handleChange}>
            <option selected="true" disabled="disabled">0</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
        </select>
    )
}

export default NumPlayersPicker;