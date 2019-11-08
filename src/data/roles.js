let Role = class{
    constructor(name, alignment, alive, hasVote, firstNightOrder, firstNightMessage, nightOrder, message, poisoned, drunk, redHerring, hasAbility, ability){
        this.name = name;
        this.alignment = alignment;
        this.alive = alive;
        this.hasVote = hasVote;
        this.firstNightOrder = firstNightOrder;
        this.firstNightMessage = firstNightMessage;
        this.nightOrder = nightOrder;
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
let Washerwoman = new Role('Washerwoman', 'townsfolk', true, true, 3, 'You point at two players and give washerwoman a townfolk class of one of them.', 'Skip the rest of nights', false, false, false, null, null);
// -Librarian: 1 "Outsider", 1 "Wrong"
let Librarian = new Role('Librarian', 'townsfolk', true, true, 4, 'You point at two players and give librarian an outsider class of one of them.', 'Skip the rest of nights', false, false, false, null, null);

// -Investigator: 1 "Minion", 1 "Wrong"
let Investigator = new Role('Investigator', 'townsfolk', true, true, 5, 'You point at two players and give investigator minion class of one of them', 'Skip the rest of nights', false, false, false, null, null);

// -Chef
let Chef = new Role('Chef', 'townsfolk', true, true, 6, 'You give the number of evil players next to each other', 'You give the number of evil players next to each other', false, false, false, null, null);

// -Empath
let Empath = new Role('Empath', 'townsfolk', true, true, 7, 'You give the number of evil players next empath', 'You give the number of evil players next to empath', false, false, false, null, null);

// -Fortune Teller: 1 "Red Herring"
let FortuneTeller = new Role('Fortune Teller', 'townsfolk', true, true, 8, 'Fortune Teller picks 2 players, if one of them is the deamon give Fortune Teller a yes, red herring registers falsly.', 'Fortune Teller picks 2 players, if one of them is the deamon give them yes, red herring registers falsly.', false, false, false, null, null);

// -Undertaker: 1 "Died Today"
let Undertaker = new Role('Undertaker', 'townsfolk', true , true, null, null, 'Show them who was executed today.', false, false, false, null, null);

// -Monk: 1 "Safe"
let Monk = new Role('Monk', 'townsfolk', true, true, null, null, 2, 'Monk picks a player, this payer is protected from demon tingiht.', false, false, false, null, null);

// -Ravenkeeper
let Ravenkeeper = new Role('Ravenkeeper', 'townsfolk', true, true, null, null, 'If killed by demon he can learn identity of one player.', false, false, false, null, null);

// -Virgin: 1 "No Ability"
let Virgin = new Role('Virgin', 'townsfolk',  true, true, false, null, null, false, false, false, true, 'If nominated for execution by townsfolk, whoever nominated you dies. Only works once.');

// -Slayer: 1 "No Ability"
let Slayer = new Role('Slayer', 'townsfolk',  true, true, false, null, null, false, false, false, true, 'Once per game can publicly try to slay the demon.');

// -Soldier
let Soldier = new Role('Soldier', 'townsfolk',  true, true, false, null, null, false, false, false, true, 'Safe from demon attacks.');

// -Mayor
let Mayor = new Role('Mayor', 'townsfolk',  true, true, false, null, "If three players left in a game and no execution occures, Townsfolk win.", false, false, false, true, 'If dies at night, someone else might die instead.');

// // Outsiders
// -Butler: 1 "Master"
let Butler = new Role('Butler', 'outsider',  true, true, 10, 'Every night must pick master and may vote only if master does.', null, false, false, false, true, 'Every night must pick master and may vote only if master does.');

// -Drunk: 1 "is the Drunk"
let Drunk = new Role('Drunk', 'outsider',  true, true, false, null, 'Thinks he is someone else.', false, false, false, null, null);

// -Recluse
let Recluse = new Role('Recluse', 'outsider',  true, true, false, null, 'May Register as either good or minion or demon.', false, false, false, null, null);;

// -Saint
let Saint = new Role('Saint', 'outsider',  true, true, false, null, 'If executed, good team dies.', false, false, false, null, null);

// // Minions
// -Poisoner: 1 "is Poisoned"
let Poisoner = new Role('Poisoner', 'minion',  true, true, 2, 'Learn who the demon is.', 1, 'Chooses a player, that players ability malcunction next 24h.', false, false, false, null, null);

// -Spy
let Spy = new Role('Spy', 'minion',  true, true, 8, 'Learn who the demon is.', 'Each night you see the grimoire. May register as good, evil or outsider even if dead.', false, false, false, null, null);

// -Baron
let Baron = new Role('Baron', 'minion',  true, true, true, 'Learn who the demon is.', 'Add 2 outsiders to the game, remove 2 townsfolks.', false, false, false, null, null);

// -Scarlet Woman: 1 "is the Demon"
let ScarletWoman = new Role('Scarlet Woman', 'minion',  true, true, true, 'Learn who the demon is.', null, false, false, false, true, 'If there are more then 5 players and demon dies you become demon.');

// Demon
// -Imp: 1 "Attacked"
let Imp = new Role('Imp', 'demon',  true, true, 1, 'Learn who minions are and 3 roles not in play.', 'Each night you attack a player, they die. If you attack yourself a minion becomes imp', false, false, false, null, null);

const roles = [
    Washerwoman, Librarian, Investigator, Chef, Empath, FortuneTeller, Undertaker, Monk, Ravenkeeper, Virgin, Slayer, Soldier, Mayor, Butler, Drunk, Recluse, Saint, Poisoner, Spy, Baron, ScarletWoman, Imp]

export default roles;