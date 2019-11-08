import React, { useState, useEffect } from 'react';
import RolePicker from '../RolePicker/RolePicker';
import roles from '../../data/roles';
import DrunkPicker from '../DrunkPicker/DrunkPicker';
import EffectButton from '../EffectButton/EffectButton';
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
                        <EffectButton
                            role={role}
                            effect={'alive'}
                            handleEffectChange={handleEffectChange}
                        />
                        <EffectButton
                            role={role}
                            effect={'poisoned'}
                            handleEffectChange={handleEffectChange}
                        />
                    </div>
                </div>
                }
            </fieldset>
        </div>
    )
}

export default Player;