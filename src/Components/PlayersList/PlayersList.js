import React from 'react';

const PlayersList  = ({playerNames}) => {
    return(
        <ul>
            {playerNames.length?
            playerNames.map((name) => {
                return <li key={name}>{name}</li>
            }):
            <li>Enter player names first.</li>}
        </ul>
    )
}
export default PlayersList;