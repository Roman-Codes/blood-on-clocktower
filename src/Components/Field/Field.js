import React from 'react';
import Player from '../Player/Player';

const Field = props =>{
    const players = [];
    const buildFiled = number =>{
        for (let i = 0; i < number; i++){
            players.push(<Player rolesInGame={props.rolesInGame}/>);
        }
    }
    buildFiled(props.numPlayers);
    return(
        <div className="field">
            {players.length?players.map((player)=>{return player}):<p>waiting</p>}
        </div>
    )
}

export default Field;