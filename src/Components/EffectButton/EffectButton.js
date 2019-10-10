import React from 'react';
import effectsArray from '../../data/effects'

const EffectButton = ({role, effect, handleEffectChange }) => {

    const effectData = effectsArray.find(searchedEffect => {return searchedEffect.name === effect});
  
    return(
        role[effect]?
        <div>
            <div>{effectData.displayTrue}</div>
            <button onClick={()=>{handleEffectChange(effect)}}> {effectData.buttonTrue} </button>
        </div>:
        <div>
            <div>{effectData.displayFalse}</div>
            <button onClick={()=>{handleEffectChange(effect)}}> {effectData.buttonFalse} </button>
        </div>
    )
} 

export default EffectButton;