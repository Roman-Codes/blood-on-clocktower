import React, { useState, useEffect } from 'react';
import RolePicker from '../RolePicker/RolePicker';
import roles from '../../data/roles';
import DrunkPicker from '../DrunkPicker/DrunkPicker';
// import NamePicker from '../NamePicker/NamePicker';

const Player = ({ rolesInGame, removeRole, addRole, playerNames, playerIndex}) => {
    const [role, setRole] = useState({});
    const [name, setName] = useState('');
    const [reminders, setReminder] = useState([]);

    useEffect(()=>{
        setName(playerNames[playerIndex]);
    }, [name])

    const clearMyRole = () => {
        setRole({});
        removeRole(role.name);
    }

    const clearMyName = () => {
        setName('');
    }

    const handleRoleRemove = e => {
        e.preventDefault();
        clearMyRole();
    }

    const handleEffectChange = effect => {
        const newRole = Object.assign({}, role);
        newRole[effect] = !newRole[effect];
        setRole(newRole);
    }

    return(
        <div>
            <fieldset className='playerCard'>
                <legend>{name}</legend>
                {role.name ? role.name === 'Drunk'? <h3>Drunk thinks he is <DrunkPicker roles={roles} rolesInGame={rolesInGame} /></h3> :<h3>{role.name}</h3>: <h2>Please Pick a role.</h2>}
                {!role.name? 
            	<RolePicker 
                    setRole={setRole}
                    rolesInGame={rolesInGame}
                    addRole={addRole}
                />:
                <div>
                    <button onClick={handleRoleRemove}> Change Role </button>
                    
                    <div className='effects'>
                        {role.alive?
                        <div>
                            <div>Alive</div>
                            <button onClick={()=>{handleEffectChange('alive')}}> Kill </button>
                        </div>:
                        <div>
                            <div>Dead</div>
                            <button onClick={()=>{handleEffectChange('alive')}}> Resurrect </button>
                        </div>}
                        {!role.poisoned?<div>
                            <button onClick={() => {handleEffectChange('poisoned')}}> Poison </button>
                        </div>:<div><div>Poisoned</div><button onClick={() => {handleEffectChange('poisoned')}}> Remove poison </button>
                        </div>}
                    </div>


                </div>
                
                }
            </fieldset>
        </div>
    )
}

export default Player;