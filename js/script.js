var myArray = [
  ["asshole", "To Grunch, add a token copy of Grunch to your hand. <br>'?' is equal to 3."],
  ["boy", "To Grunch, destroy all other creatures. <br>'?' is equal to the number of creatures that were on the battlefield as Grunch entered the battlefield."],
  ["chap", "To Grunch, draw a card. <br> '?' is equal to four."],
	["dude", "To Grunch, create four token copies of Grunch, except they don't have this ability. <br>'?' is equal to 1."],
  ["egotist", "To Grunch, pay X mana. '?' is equal to 2 to the power of X."],
["fella", "To Grunch, take an extra turn after this one. <br>'?' is equal to the number of opponents soyraging across from you minus ten."],
["guy", "To Grunch, draw two cards. <br> '?' is equal to the number of cards in your hand."],
["hooligan", "To Grunch, do up to six push-ups in real life. <br> '?' is equal to the number of push-ups you did. You are allowed to lie. <br> Doing push-ups is a special action and does not use the stack."],

];


var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

var elem = document.getElementById('grunchtext');
elem.innerHTML = randomItem[1];

var guy = document.getElementById('guytext');
guy.innerHTML = randomItem[0];