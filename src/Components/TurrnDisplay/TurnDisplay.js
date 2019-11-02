import React from 'react';

const TurnDisplay = (props) => {
    const { turnData, setTurnData } = props;

    const handleTimeChange = () =>{
        const turnCopy = {...turnData}
        if (turnCopy.dayTime){
            turnCopy.dayTime = false;
            turnCopy.nightTime = true;
            setTurnData(turnCopy);
            console.log(turnCopy);
        } else {
            turnCopy.number++;
            turnCopy.dayTime = true;
            turnCopy.nightTime = false;
            setTurnData(turnCopy);
            console.log(turnCopy);
        }
    }
    return(
        <ul>
            <li>Turn #:{turnData.number}</li>
            <li>{turnData.dayTime ? <span>'🌞'</span> : '🌒'}</li>
            <li onClick={handleTimeChange}><button>Next Phase.</button></li>
        </ul>
    )
}

export default TurnDisplay;