let Role = class{
    constructor(name, alignment, alive, hasVote, firstNight, firstNightMessage, message, poisoned, drunk, redHerring, hasAbility, ability){
        this.name = name;
        this.alignment = alignment;
        this.alive = alive;
        this.hasVote = hasVote;
        this.firstNight = firstNight;
        this.firstNightMessage = firstNightMessage;
        this.message = message;
        this.poisoned = poisoned;
        this.drunk = drunk;
        this.redHerring = redHerring;
        this.hasAbility = hasAbility;
        this.ability = ability;
    }
}

// Townsfolk
// Washerwoman: 1 "Townsfolk", 1 "Wrong"
let Washerwoman = new Role('Washerwoman', 'townsfolk', true, true, true, 'You point at two players and give washerwoman a townfolk class of one of them.', 'Skip the rest of nights', false, false, false, null, null);
// -Librarian: 1 "Outsider", 1 "Wrong"
let Librarian = new Role('Librarian', 'townsfolk', true, true, true, 'You point at two players and give librarian an outsider class of one of them.', 'Skip the rest of nights', false, false, false, null, null);

// -Investigator: 1 "Minion", 1 "Wrong"
let Investigator = new Role('Investigator', 'townsfolk', true, true, true, 'You point at two players and give investigator minion class of one of them', 'Skip the rest of nights', false, false, false, null, null);

// -Chef
let Chef = new Role('Chef', 'townsfolk', true, true, true, 'You give the number of evil players next to each other', 'You give the number of evil players next to each other', false, false, false, null, null);

// -Empath
let Empath = new Role('Empath', 'townsfolk', true, true, true, 'You give the number of evil players next empath', 'You give the number of evil players next to empath', false, false, false, null, null);

// -Fortune Teller: 1 "Red Herring"
let FortuneTeller = new Role('Fortune Teller', 'townsfolk', true, true, true, 'Fortune Teller picks 2 players, if one of them is the deamon give Fortune Teller a yes, red herring registers falsly.', 'Fortune Teller picks 2 players, if one of them is the deamon give them yes, red herring registers falsly.', false, false, false, null, null);

// -Undertaker: 1 "Died Today"
let Undertaker = new Role('Undertaker', 'townsfolk', true , true, false, null, 'Show them who was executed today.', false, false, false, null, null);

// -Monk: 1 "Safe"
let Monk = new Role('Monk', 'townsfolk', true, true, false, null, 'Monk picks a player, this payer is protected from demon tingiht.', false, false, false, null, null);
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
    Washerwoman, Librarian, Investigator, Chef, Empath, FortuneTeller, Undertaker, Monk,

]

export default roles;