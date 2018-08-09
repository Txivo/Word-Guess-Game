// Gobal veriables
// ==========================================================================
var wins = 0;
var loses = 0;
// Created array of words
var word = ["javascript", "red", "sterbend", "pink", "police"];

// Choose word randomly
var randNum = Math.floor(Math.random()*word.length);
var wordSelected = word[randNum];
var rGuess = [];
var wGuess = [];
var emptyArray = []; 

console.log(wordSelected);
// dom manipulation

var docUnder = document.getElementsByClassName('emptyArray');
var docRguess = document.getElementsByClassName('rGuess');
var docWguess = document.getElementById('wGuess');

// Main
// ==========================================================================
console.log(wordSelected);
// show amount of underscores based on the lenght of word
var underScore = () => {

    for  (var i =0 ; i < wordSelected.length; i ++){
        emptyArray.push('_');
    }
    docWguess.innerHTML = emptyArray.length;
    console.log(emptyArray.length);
    return emptyArray;
};

console.log(underScore());

// user guesses
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    // if users guess is right
    if (wordSelected.indexOf(keyword) > -1){
        // add to right guess array
        // replace underscore with right letter
        emptyArray[wordSelected.indexOf(keyword)] = keyword;
        docUnder[0].innerHTML = emptyArray.join('');
        rGuess = emptyArray;
        // check if user word matches guess
        if (emptyArray.join('') == wordSelected){
            alert('You win!')
        }        
    } else {
        result = guessLeft();
        console.log(result);
        if (result == false)
            alert("You Lose");
        //wGuess.push(keyword);
        //docWguess[0].innerHTML = wGuess.join('');
    }

    docUnder[0].innerHTML = emptyArray.join('');
});

// reduce number of guesses left
 var guessLeft = () => {

    var guessesleft = docWguess.innerHTML;
    console.log(guessesleft);
    
    if (guessesleft >0)
    {
        guessesleft = guessesleft -1;
        console.log(guessesleft);
        docWguess.innerHTML= guessesleft;   
        return true;
    }

    if (guessesleft ==0)
    {
        guessesleft = guessesleft -1;
        docWguess.innerHTML = guessesleft;   
        return false;
    }
 }

// console.log(guessLeft());