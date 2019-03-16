//Quiz for creating a question game

(function(){

    //function constructor which determines for format of the questions and properties
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//selects a random number which selects which question from "questArray" to be asked.
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

Question.prototype.checkAnswer = function(ans) {
    var sc = 0;
    if (ans === this.correct) {
        sc++;   
        console.log('Correct Answer, Your score is ' + sc);
    } else if(ans !== this.correct && sc >= 0) { 
        sc--;
        console.log('Incorrect Answer. Point subtracted. Your score is ' + sc + 'Please try again');
    } else {
        console.log('Incorrect Answer, your score is ' + sc + 'Please try again');
    }
};

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
    console.log(answer);
    if (answer === 'exit') {
        console.log('Quiting Now');
        console.log('Enter \'start\' to start-over');
        var startAgain = window.prompt('Enter \'start\' to start-over');
        if(startAgain='start'){
            nextQuestion();
        }
        
    } else {
        questions[n].checkAnswer(window.parseInt(answer));
        nextQuestion();
    }

    }

nextQuestion();  
    
})();





