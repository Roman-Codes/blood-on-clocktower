import React from 'react';
import Player from '../Player/Player';

const Field = ({rolesInGame, addRole, removeRole, playerNames}) =>{
    const players = [];
    const buildFiled = number =>{
        for (let i = 0; i < number; i++){
            players.push(
                <Player
                    rolesInGame={rolesInGame}
                    playerIndex={i}
                    addRole={addRole}
                    removeRole={removeRole}
                    // numPlayers={numPlayers}
                    playerNames={playerNames}
                />
            );
        }
    }
    buildFiled(playerNames.length);
    return(
        <div className="field">
            {players.length?players.map((player)=>{return player}):<p>waiting</p>}
        </div>
    )
}

export default Field;