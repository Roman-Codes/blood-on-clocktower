import React from 'react';

const NameForm = ({playerNames, setPlayerNames}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newNames = [...playerNames];
        newNames.push(e.target[0].value);
        setPlayerNames(newNames);
        e.target[0].value = '';
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="playerName">Enter Name of player</label>
            <input id="playerName" type="text"/>
            <input type="submit" value="Submit."/>
        </form>
    )
}

export default NameForm;