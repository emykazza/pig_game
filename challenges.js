/*
1.  A player looses his ENTIRE score when he rolls two 6 in a row.  After that,
it's the next player's turn. (HINT: always save the previous dice roll in a separate variable)
2.  Add an input field to the HTML where players can set the winning score, so that they can
change the predefined score of 100. (Hint: you can read that value with the .value property
in JavaScript.  This is a good opportunity to use google to figure this out.
3. Add another dice to the game, so that there are two dices now.  The player looses his current
score when one of them is a 1.  (Hint: you will need CSS to position the second dice, so take a 
look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

// var lastDice;
var gameScore;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //1. random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
        
//Instead of doing query selector add ID field to dice image in HTML and do "getElementById" for var dicedom     
/*
step 2 would look like this for challenge 3
document.getElementById('dice-1').style.display = 'block';
document.getElementById('dice-2').style.display = 'block';
document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
document.getElementById('dice-2').src = 'dice' + dice2 + '.png';
*/
        
    //2. Display the result
    var diceDOM1 = document.querySelector('.dice1');
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM1.style.display = 'block';
    diceDOM2.style.display = 'block';
    diceDOM1.src = 'dice-' + dice1 + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    
    //3. Update the round score IF the rolled number was NOT a 1.  Rule change and commenting out following
/*
CHALLENGE 2 ORIGINAL STEP 3
    if (dice1 === 1 || dice2 === 1) {
        //player looses current score
        scores[activePlayer] = 0;
        //you must display this result in web page "= 0" only required NOT scores[activePlayer]
        document.querySelector('#score-' + activePlayer).textContent = 0;
        //next players turn using DRY principle use function
        nextPlayer();
    } else if (dice1 !== 1 || dice2 !== 1) {
        roundScore += (dice1 + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
       //Next Player
        nextPlayer();
    
    }
    
    // lastDice = dice1;
*/
// original STEP 3 with added dice2
    if (dice1 !== 1 && dice2 !== 1) {
        //Add score
        roundScore += (dice1 + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //NextPlayer
        nextPlayer();
    }
    
    }
    
    
}); 

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //add CURRENT score to GLOBAL score (activePlayer who is current playing will have his score updated to scores array.
    scores[activePlayer] += roundScore;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('.final-score').value;
    var winningScore;
        
        //undefined, 0, null or "" are coerced to false
        //anything else is coerced to true
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
        
        
    //Check if player won the game
    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        //Next Player
    nextPlayer();
    }
    
    }
    
});



function nextPlayer() {
    //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
    
       document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
       document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');  
        
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    //gives us a blank field without dice to start the app "Hides the dice"
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    //Sets scores and roundScores to 0 for each player.
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    //remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}














