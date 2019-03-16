//Quiz for creating a question game

(function(){

    //function constructor which determines for format of the questions and properties
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//selects a random number which selects which question fro m "questArray" to be asked.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

    
Question.prototype.displayQuestion = function() 
    {
    console.log(this.question);
    
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
        
    }
}

function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}
var keepScore = score();
    
Question.prototype.checkAnswer = function(ans, callback) {
    var sc; 
    if (ans === this.correct) {
        console.log('Correct Answer, Your score is ');
        sc = callback(true);
      } else { 
        console.log('Incorrect Answer. Point subtracted. Your score is Please try again');
        sc = callback(false);
    }
    this.displayScore(sc);
};

Question.prototype.displayScore = function(score) {
    console.log('Your current score is ' + score);
    console.log('-------------------------------------------');
}
    
//answer list array which is defined seperatly from the new object constructor.

//defined questions and the answers
var q1 = new Question('What color is most wood? ', ['yellow', 'brown', 'blue'], 1);
var q2 = new Question('What color is the sky on a nice day?', ['yellow', 'brown', 'blue'], 2);
var q3 = new Question('What general color is most mustard?', ['yellow', 'brown', 'blue'], 0);

var questions = [q1, q2, q3];    

    
function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = window.prompt('please make a selection');
    if (answer === 'exit') {
        console.log('Quiting Now');
        console.log('Enter \'start\' to start-over');
        var startAgain = window.prompt('Enter \'start\' to start-over');
        if(startAgain='start'){
            nextQuestion();
        }
        
    } else {
        questions[n].checkAnswer(window.parseInt(answer), keepScore);
        nextQuestion();
    }

    }

nextQuestion();  
    
})();





