var myArray = [
["asshole", "To Grunch, add a token copy of Grunch to your hand. <br>'?' is equal to 3."],
["boy", "To Grunch, Grunch fights up to one target creature. <br>'?' is equal to the number of creatures on the battlefield."],
["chap", "To Grunch, draw a card. <br> '?' is equal to four."],
["dude", "To Grunch, create four token copies of Grunch, except they don't have this ability. <br>'?' is equal to 1."],
["egotist", "To Grunch, pay X mana. '?' is equal to 2 to the power of (X+1)."],
["fella", "To Grunch, take an extra turn after this one. Exile grunch. <br>'?' is equal to NaN."],
["guy", "To Grunch, draw two cards. <br> '?' is equal to the number of cards in your hand."],
["hooligan", "To Grunch, do up to seven push-ups in real life. <br> '?' is equal to the number of push-ups you did. You are allowed to lie. <br> Doing push-ups is a special action and does not use the stack."],
["ingrate", "To Grunch, attach Grunch to target land you control. Grunch has the abilities of the land he is attached to. <br> '?' is equal to the number of lands you control."],
["jerk", "To Grunch, Put a Grunch counter on Grunch. For as long as Grunch has a Grunch counter, Grunch has "tap: Grunch." <i>(Be sure to revisit tinyurl.com/howtoGRUNCH each time you tap Grunch.)</i> <br> '?' is perpetually equal to one. '?' cannot be changed for the rest of the game."],
["killer", "To Grunch, destroy up to two target creatures with combined power 5 or less. <br> '?' is equal to 2."],
["lhurgoyf", "To Grunch, mill up to half your library. <br> '?' is equal to the number of creature types among cards in your graveyard."],
["monster", "To Grunch, replace target creature's power and toughness numbers with Grunch's power and toughness question marks. <i>(Use scissors if you have to.)</i> <br> '?' is equal to 0."],
["nonce", "To Grunch, gain control of up to one target creature with power 3 or less. <br> '?' is equal to the number of creatures you control."],
["oaf", "To Grunch, name a card. Target opponent reveals their hand. If their hand contains the named card, '?' becomes 8. Otherwise, '?' is 4."],
["prick", "To Grunch, Grunch becomes a token copy of Questing Beast. You may not use a physical token, replacement card, or overlay to represent this. Just use your memory. <br> '?' is irrelevant in this instance. Go google the p/t of Questing Beast."],
["quack", "To Grunch, draw target card in any zone. <br> '?' is equal to the number of cards in your hand."],
["ruffian", "To Grunch, create a token copy of Grunch."],


];


var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

var elem = document.getElementById('grunchtext');
elem.innerHTML = randomItem[1];

var guy = document.getElementById('guytext');
guy.innerHTML = randomItem[0];
