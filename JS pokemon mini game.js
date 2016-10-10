var user = prompt("Your walking threw the gardens and a wild Charmander appears!! Do you CATCH IT? IGNORE IT? or BATTLE IT?").toUpperCase();
switch(user){
    case 'CATCH IT':
    var feed = prompt("Feed it?").toUpperCase();
    var pokeball = prompt("Throw a pokeball?").toUpperCase();
        if(pokeball === 'YES' && feed === 'YES'){
            console.log("Nice throw you caught it!!");
        }else{
            console.log("Unlucky he ran away!!");
        }
    break;
    
    case 'IGNORE IT':
        console.log("You walk buy casually, luckily he didnt notice you..");
    break;
    
    case 'BATTLE IT':
        console.log("You are about to battle! Good luck");
        var hit = prompt("Do you strike first?").toUpperCase();
        var strike = prompt("Attack again?").toUpperCase();
        if (hit === 'YES' || strike === 'YES'){
            console.log("Great you won the battle!!");
        }else{
            console.log("Better luck next time..");
        }
    break;
    
    default:
    console.log("Please pick one of the 3 options");
    break;
}
    