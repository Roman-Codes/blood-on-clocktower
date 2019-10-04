import React, { useState } from 'react';

const RolePicker = props => {
    const [rolePick, setRolePick] = useState(null);
    const handleChange= e =>{
        setRolePick(e.target.value)
    }
    if (rolePick){
        console.log('setting role');
        props.setRole(rolePick);
    }
    return(
        <select onChange={handleChange}>
            <option className='townsfolk' value='washerwoman'>Washerwoman</option>
            <option className='townsfolk' value='librarian'>Librarian</option>
            <option className='townsfolk' value='investigator'>Investigator</option>
            <option className='townsfolk' value='chef'>Chef</option>
            <option className='townsfolk' value='empath'>Empath</option>
            <option className='townsfolk' value='fortuneTeller'>Fortune Teller</option>
            <option className='townsfolk' value='undertaker'>Undertaker</option>
            <option className='townsfolk' value='monk'>Monk</option>
            <option className='townsfolk' value='ravenkeeper'>Ravenkeeper</option>
            <option className='townsfolk' value='slayer'>Slayer</option>
            <option className='townsfolk' value='soldier'>Soldier</option>
            <option className='townsfolk' value='mayor'>Mayor</option>
            <option className='townsfolk' value='virgin'>Virgin</option>
            <option className='outsider' value='butler'>Butler</option>
            <option className='outsider' value='drunk'>Drunk</option>
            <option className='outsider' value='recluse'>Recluse</option>
            <option className='outsider' value='saint'>Saint</option>
            <option className='minion' value='poisoner'>Poisoner</option>
            <option className='minion' value='spy'>Spy</option>
            <option className='minion' value='baron'>Baron</option>
            <option className='minion' value='scarletWoman'>Scarlet Woman</option>
            <option className='demon' value='imp'>Imp</option>
        </select>
    )
}

export default RolePicker;