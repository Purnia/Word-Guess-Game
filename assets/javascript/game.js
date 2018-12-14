//create an array of words
var words = ['tuco', 'hector', 'meth', 'chemistry']
//choose word randomly
var randomword = Math.floor((Math.random() * words.length));
var chosenword = words[randomword];
console.log(chosenword);


var underscore = []
var correctword = []
var wrongword = []
var wincounter = 0
var guesscounter = 10


//DOM Manipulation

var getUnderscore = document.getElementsByClassName("Underscores");
var getletters = document.getElementsByClassName("letters");
var getwins = document.getElementsByClassName("wins");
var getguess = document.getElementsByClassName("guessesnumber");


//create underscores based on lenghth of word
function generateUnderscore() {
    for (var i = 0; i < chosenword.length; i++) {
        underscore.push('_');
       

    }
    return underscore;

}

// console.log(generateUnderscore());
//get users guess
document.addEventListener('keypress', function (event) {
    var code = event.keyCode;
    var key = String.fromCharCode(code);
    console.log(key);


//if guessed letter=random word letter then fill in current word

    if (chosenword.indexOf(key) > -1){
        console.log(true);
//add to current word array
        correctword.push(key);
        getUnderscore[0].innerHTML = underscore.join(' ');
        //replace underscores with right letters
        underscore[chosenword.indexOf(key)] = key;
        getUnderscore[0].innerHTML = underscore.join(' ');
        console.log(underscore);
//check to see if user word matches
        if (underscore.join('') === chosenword) {
            wincounter++;
            getwins[0].innerHTML = wincounter;
          
            console.log(wincounter);
        }

    }
//if incorrect letter push into letterguessed aray. and decrese guesscounter by 1.
    else{
        wrongword.push(key);
        getletters[0].innerHTML = wrongword.join(' ');
        guesscounter--;
        getguess[0].innerHTML = guesscounter;

       
        }
if(guesscounter <= 0) {
    alert("Game Over");
    alert("Refesh Page");

}
     
    

});


getUnderscore[0].innerHTML = generateUnderscore().join(' '); 





