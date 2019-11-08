import React, { useState } from 'react';
import roles from '../../data/roles';

const TurnDisplay = (props) => {
    const { turnData, setTurnData, firstNightOrder, restNightOrder, activePlayer, setActivePlayer } = props;
    const [playersTurn, setPlayersTurn] = useState(0);

    const handleFirstNight = () => {
        if (playersTurn === 0){

            setActivePlayer(firstNightOrder[0]);
        }
    }

    const handleTimeChange = () =>{
        const turnCopy = {...turnData}
        if (turnCopy.dayTime){
            turnCopy.dayTime = false;
            setTurnData(turnCopy);
        } else {
            handleFirstNight();
            turnCopy.number++;
            turnCopy.dayTime = true;
            setTurnData(turnCopy);
        }
    }
    return(
        <div>
            <ul>
                <li>Turn #:{turnData.number}</li>
                <li>{turnData.dayTime ? <span>🌞</span> : '🌒'}</li>
                <li onClick={handleTimeChange}><button>Next Phase.</button></li>
            </ul>
            <div> </div>
        </div>
    )
}

export default TurnDisplay;