// Gobal veriables
// ==========================================================================




var wins = 0;
 var loses = 0;
 

// Created array of words
var word = ["javascript", "red", "sterbend", "pink", "police"];

// Choose word randomly
var randNum = Math.floor(Math.random()*word.length);
var wordSelected = word [randNum];
var rGuess = [];
var wGuess = [];
var emptyArray = []; 

console.log(wordSelected);
// dom manipulation

var docUnder = document.getElementsByClassName('emptyArray');
var docRguess = document.getElementsByClassName('rGuess');
var docWGuess = document.getElementsByClassName('wGuess');


// Main
// ==========================================================================
console.log(wordSelected);
// show amount of underscores based on the lenght of word
var underScore = () => {

    for  (var i =0 ; i < wordSelected.length; i ++){
        emptyArray.push('_');
        
    }

    return emptyArray;
}

console.log(underScore());

// reduce number of guesses left
// var guessLeft = () => {

//     for  (var i =0 ; i < wordSelected.length; i --){
//         wGuess.push(i);
//     }

//     return wGuess;
// }

// console.log(guessLeft());



// user guesses
document.addEventListener('keypress', (event) => {
    var keyword = string.fromcharcode(event.keycode);
    
// if users guess is right
    if (wordSelected.indexOf.(keyword) > -1){
        console.log (true); 

        // add to right guess array
        rGuess.push(keyword);
        console.log (rGuess); 

        // replace underscore with right letter
        emptyArray[wordSelected.indexOf(keyword)] = keyword;
        docUnder[0].innerHTML = emptyArray.join('');
        docRguess[0].innerHTML = rGuess.join('');
        

        // check if user word matches guess
        if (emptyArray.join('') == wordSelected){

            alert('You win!')
        }        
    }
    
    else {

        wGuess.push(keyword);
        console.log (wGuess); 
        docWguess[0].innerHTML =wGuess.join('');
    }

    docUnder[0].innerHTML = underScore.join('');
});

