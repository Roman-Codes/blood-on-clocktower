let Role = class{
    constructor(name, type, alive, hasVote, firstNight, firstNightMessage, message, poisoned, drunk, redHerring, hasAbility, ability){
        this.name = name;
        this.type = type;
        this.alive = alive;
        this.hasVote = hasVote;
        this.firstNight = firstNight;
        this.firstNightMessage = firstNightMessage;
        this.message = message;
        this.poisoned = poisoned;
        this.deunk = drunk;
        this.redHerring = redHerring;
        this.hasAbility = hasAbility;
        this.ability = ability;
    }
}

// Townsfolk
// Washerwoman: 1 "Townsfolk", 1 "Wrong"
let Washerwoman = new Role('washerwoman', 'townsfolk', true, true, true, 'You point at two players and give washerwoman a townfolk class of one of them.', 'Skip the rest of nights', false, false, false, null, null);
// -Librarian: 1 "Outsider", 1 "Wrong"
let Librarian = new Role('librarian', 'townsfolk', true, true, true, 'You point at two players and give librarian an outsider class of one of them.', 'Skip the rest of nights', false, false, false, null, null);

// -Investigator: 1 "Minion", 1 "Wrong"
// -Chef
// -Empath
// -Fortune Teller: 1 "Red Herring"
// -Undertaker: 1 "Died Today"
// -Monk: 1 "Safe"
// -Ravenkeeper
// -Virgin: 1 "No Ability"
// -Slayer: 1 "No Ability"
// -Soldier
// -Mayor

// // Outsiders
// -Butler: 1 "Master"
// -Drunk: 1 "is the Drunk"
// -Recluse
// -Saint

// // Minions
// -Poisoner: 1 "is Poisoned"
// -Spy
// -Baron
// -Scarlet Woman: 1 "is the Demon"

// Demon
// -Imp: 1 "Attacked"
const roles = [
    Washerwoman,
    Librarian,
]

export default roles;