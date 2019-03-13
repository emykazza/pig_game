//CLOSURES
//wE WANT TO RIGHT A FUNCTION THAT CALCULATES HOW MANY YEARS LEFT UNTIL RETIREMENT.

function retirement(retirementAge) {
    //this function returns a funtions that computes how many years left.
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
        //a is a string declared above.
    }
}
//as you know this returns a function so we can store this is a variable.

//this variable will allow us to create multiple retirement ages based on country.

var retirementUs = retirement(66);
retirementUs(1990);

//retirement(66)(1990);
//This will give us the same result.

//The inner function has access to the outer functions variables even after it has returned.  

//CLOSURE SUMMARY
//An inner function has always access to the variables and parameters of its outer function even after the outer function has returned.

//when the argument of yearOfbirth is passed in a new execution context of the inner function is added.

//the execution context may have stopped but the scope chain still has access to the retirement() functions variables.  Now when the inner function is called the scope chain stays intact.  The inner function still has access to outer functions variables "they are held up" "THe inner function CLOSES IN on the outer functions" variables.  SCOPE CHAIN=Pointer to variable objects. (its written lixically and has access to other variables)

//!! - closures are built into JavaScript automatically.

//application of closures would be for this given code.  creation of different country variables to access the function and pass in different ages and retirement ages based on country.  

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUs(1984);
retirementIceland(1990)

//rewrite the interview question code using the closures

//This was written myself based on what teacher taught.  The variables and strings of text are stored in outer function, which the inner function closes in on and has access to.
/*
function interviewQuestion(job) {
    var a = ', designs sites';
    var b = ', teaches children';
    var c = ', does something else';
    if (job === 'designer') {
        return function (name) {
            console.log(name + a);
        }
        //teachers code
        
        
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + b);
        } 
    } else {
        return function (name) {
            console.log(name + c);
        }
    }
};

var designer = interviewQuestion('designer');
var teacher = interviewQuestion('teacher');
var somethingElse = interviewQuestion('fireman');
designer('john');
teacher('Chris');
somethingElse('Mark');
*/

//teachers code
function interviewQuestion2(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', what is web design?');
    } else if (job === 'teacher') {
        console.log(name + ', describe the subject you teach'); 
    } else {
        console.log(name + ', describe what you do');
        }
    }
}
interviewQuestion2('teacher')('John');
//What the difference is the desicion is taken right inside the function in which we returned.  We took the Job variable to make the decision in side the return function even after the interviewQuestion2 has returned.

//TO UNDERSTAND THE DIFFERENCE
//1. first way the decision was done by the outer function (if else statments from within the outer function).

//2. now with closures the decision is made from the inner function.  the only thing the outer function holds up is the JOB variable.
    
//USING CLOSURES MAKES OUR CODE ALOT CLEANER.

//the inner function will close in on the variable we defined in the outer function in this case the "job".  the inner function can use the outer function even after the outer function is closed.  THe scoping chain keeps these variables for later use.  This is what is means when the inner function closes in on the outer functions variables.



//BIND CALL AND APPLY

