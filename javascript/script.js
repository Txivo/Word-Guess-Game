1. Computer is going to guess a number
2. Im going to guess this number
3. If its correct, I win the game and alert that I won
4. If its incorrect, alert that incorrect and my number of guesses goes down
5. ( I have 5 guesses to begin with)
6. I lose the game when guesses become 0


Step 1: Make the layout
-I would display intitial wins as 0, loses as 0, guesses as 5, guesses so far as nothing
-in my html:
<p> Wins: <span id = "wins">0</span></p>

Step 2: Give the computer an array of choices
-var choiceArray = [a, b,,c]

Step 2.5: Create an empty array
-will hold what ive guessed already


Step 3: Give the computer the ability to choose something from the array randomly
-Math.random: randomly picks a random number between 0 and 1
-Math.floor: rounds it off
-.length
var computerGuess = Math.floor(Math.random() * choiceArray.length
Step 4: You need to identify the key that has been pressed
-onkeyup: this will tell you what key was pressed, and you also assign this to a variable
Step 5: Now make the comparisons!
-Is myGUess === computerGuess? (if)
{
    alert that I won!
    wins ++
    reset()
}
Else  (myGuess !== computerGuess) {
    alert incorrect!
    guesses --
    .push-look this up var emptyArray = [];
    if, guesses === 0 {
        alert you have lost
        losses ++
        reset()
    } 
}
Step 6; Add a reset function
-Reset guesse to 5, guesses so far will be empty again, make the computer choose again

function reset () {
    -guesses=5;
    guessesSoFar=[];
    computerGuess = Mat.....
}






// $ (document).ready(function){
//     var cpuHolder=$ ("cpuHolder");
//     cpuHolder.text(math.floor(math.random() * 4 + 1))


//     $("#choicehuman").on("click",function){
//         var randNum = math.flor(math.random()* 4 + 1);
//         $("#p1Holder").text("i chose:")


//     }

// }